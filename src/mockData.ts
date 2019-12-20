import {FaSnapchatGhost, FaStackOverflow, IoMdMegaphone} from "react-icons/all";
import React from "react";

export type Idea = {
  name: string,
  teaser: string,
  icon: React.FC,
  color: string,
  voteCount: number,
  votedAt: Date|null,
  images: Array<string>,
  pitch: string
}

export const ideasModel: {[key: string]: Idea} = {
  0: {
    name: 'Ideabook',
    teaser: 'Publish all ideas',
    icon: IoMdMegaphone,
    color: '#8ad0ff',
    voteCount: 24,
    votedAt: new Date(),
    images: [],
    pitch: 'Alarm clocks were invented 200 years ago but hasn\'t really changed since. Cervidae enables you to start your day with your friend or with Beyonce singing a morning tune.'
  },
  1: {
    name: 'StackOverflow',
    teaser: 'Where Developers Learn',
    icon: FaStackOverflow,
    color: '#ffbb5c',
    voteCount: 24,
    votedAt: null,
    images: [],
    pitch: 'Stack Overflow is the largest, most trusted online community for developers to learn, share​ ​their programming ​knowledge, and build their careers.'
  },
  2: {
    name: 'Snapchat',
    teaser: 'Share a moment',
    icon: FaSnapchatGhost,
    color: '#fffbab',
    voteCount: 24,
    images: ['/snap1.png', '/snap2.png', '/snap3.png', '/snap4.png'],
    votedAt: null,
    pitch: 'Snapchat lets you easily talk with friends, view Live Stories from around the world, and explore news in Discover. Life\'s more fun when you live in the moment!'
  },
  3: {
    name: 'Slack',
    teaser: 'Where Work Happens',
    icon: IoMdMegaphone,
    color: '#dfaeff',
    voteCount: 24,
    votedAt: null,
    images: [],
    pitch: 'Slack is where work flows. It\'s where the people you need, the information you share, and the tools you use come together to get things done.\n'
  },
};