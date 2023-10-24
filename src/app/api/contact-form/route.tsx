import { postJson } from '@app/client';
import { ContactSubmission, ContactFormSchema } from '@app/schemas';
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const url = process.env.FORM_CONTACT_ENDPOINT

  if (!url) {
    throw new Error("Missing FORM_CONTACT_ENDPOINT")
  }

  const res = await request.json() as ContactSubmission
  const submission = ContactFormSchema.omit(
    {
      privacy: true
    }
  ).safeParse(res)

  if (!submission.success) {
    return NextResponse.json({ zod_errors: submission.error }, { status: 400 })
  }

  return await postJson(url, submission.data).then(async (response: Response) => {
    if (response.status != 200) {
      return NextResponse.json(
        {
          success: false,
          statusText: response.statusText,
          error: await response.json()
        }, {
        status: response.status
      });
    }

    return NextResponse.json(
      {
        success: true
      }, {
      status: response.status
    });
  });
}
