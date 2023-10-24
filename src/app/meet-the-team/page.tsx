import { WP_Query } from "@app/_wordpress/WPClient"
import { getYoastMetaData } from "@app/helpers";
import AlternatingBlocks from "@components/AlternatingBlocks";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import TeamMembersGrid from "@components/TeamMembersGrid";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "meet-the-team");
  return data;
}

export default async function MeetTheTeamPage() {
  const [data] = await WP_Query<any>('pages?slug=meet-the-team');
  const fields = data[0]?.acf;

  return <>
    <PageTitleAndSubTitle {...data[0]} />
    <TeamMembersGrid {...fields.team_members_component?.acf?.team_members_component} />
    <AlternatingBlocks blocks={fields.alternating_blocks_component.acf?.alternating_blocks_component} />
  </>
}
