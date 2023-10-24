import { postJson } from '@app/client';
import { NewsletterSubmission, NewsletterSchema } from '@app/schemas';
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const url = process.env.FORM_NEWSLETTER_ENDPOINT

  if (!url) {
    throw new Error("Missing FORM_NEWSLETTER_ENDPOINT")
  }

  const res = await request.json() as NewsletterSubmission
  const submission = NewsletterSchema.safeParse(res);

  if (!submission.success) {
    return NextResponse.json({ zod_errors: submission.error }, { status: 400 })
  }

  const data = {
    email: submission.data.email,
  }

  return await postJson(url, data).then(async (response: Response) => {
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
