import DescendingContentBlocks from "@components/DescendingContentBlocks";
import HeroImage from "@components/HeroImage";
import { WP_Query } from "@app/_wordpress/WPClient"
import CircleNumbers from "@components/CircleNumbers";
import ContentBlocks from "@components/ContentBlocks";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import TeamMembersGrid from "@components/TeamMembersGrid";
import AlternatingBlocks from "@components/AlternatingBlocks";
import { getYoastMetaData } from "@app/helpers";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "about-us");
  return data;
}

export default async function AboutUsPage(): Promise<React.JSX.Element> {
  const [data] = await WP_Query<any>('pages?slug=about-us&_fields[]=acf');
  const fields = data[0]?.acf;

  return <>
    <PageTitleAndSubTitle className="mt-14 max-w-[1240px] mx-auto" {...data[0]} />
    <HeroImage {...fields.featured_image} />
    <DescendingContentBlocks {...fields.descending_content_blocks_component?.acf?.descending_content_blocks_component} />
    <CircleNumbers {...fields.numbers_component?.acf?.numbers_component} />
    <ContentBlocks {...fields?.content_blocks_component?.acf?.content_blocks_component} />
    <TeamMembersGrid {...fields.team_members_component?.acf?.team_members_component} />
    <AlternatingBlocks blocks={fields.alternating_blocks_component.acf?.alternating_blocks_component} />
  </>
}
