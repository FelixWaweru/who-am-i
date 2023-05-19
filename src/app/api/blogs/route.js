import { NextResponse } from "next/server";

const blogData = [
  {
    id: 1,
    title: 'Automating online dating with Artificial Intelligence',
    description:
      '',
    blogLink: 'https://medium.datadriveninvestor.com/automating-dating-with-artificial-intelligence-989402bb5f63',
  },
  {
    id: 2,
    title: 'Celebrating Black History Month With a Swahili Programming Language',
    description:
      '',
    blogLink: 'https://whyweru.medium.com/celebrating-black-history-month-with-a-swahili-programming-language-6e30d9fbebda',
  }
];

export async function GET(request) {
    return NextResponse.json(blogData);
}