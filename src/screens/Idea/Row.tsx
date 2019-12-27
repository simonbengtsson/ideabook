import React, {CSSProperties, useState} from "react";
import {useHistory} from "react-router";
import {Idea, ideasModel} from "../../mockData";
import Color from "color";
import {IoMdArrowDropup} from "react-icons/all";
import {primaryColor, primaryHeader, secondaryText} from "../../common/common";

type Props = {
  idea: Idea,
}

const VoteButton: React.FC<Props> = (props) => {

  const {idea } = props;
  const [ideas, setIdeas] = useState(Object.values(ideasModel));

  const toggleVote = () => {
    idea.votedAt = idea.votedAt ? null : new Date();
    idea.voteCount = idea.votedAt ? idea.voteCount + 1 : idea.voteCount - 1;
    setIdeas([...ideas]);
  };

  const style: CSSProperties = {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
    border: 'solid 1px',
    borderColor: idea.votedAt ? primaryColor : '#ccc',
    marginLeft: 'auto',
    display: 'flex',
    fontSize: 18,
    flexDirection: 'column',
    cursor: 'pointer',
    userSelect: 'none',
    alignItems: 'center'
  };

  return <span style={{...style}} onClick={(event) => { event.stopPropagation(); toggleVote() }}>
    <IoMdArrowDropup style={{color: idea.votedAt ? primaryColor : 'black'}}/>
    <div style={{color: idea.votedAt ? primaryColor : 'black'}}>{idea.voteCount}</div>
  </span>
};

export const IdeaRow: React.FC<Props> = (props) => {
  const { idea } = props;

  let history = useHistory();

  const navigateToIdea = () => {
    console.log(idea.id, ideasModel);
    history.push('/ideas/' + idea.id);
  };

  const Icon = idea.icon;
  const color = Color(idea.color).darken(0.5).rgb().string();
  return <li style={{cursor: 'pointer', display: 'flex', marginBottom: 8, alignItems: 'center'}}
             onClick={() => navigateToIdea() }>
    <div style={{
      borderRadius: 100,
      backgroundColor: idea.color,
      padding: 12,
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icon style={{fontSize: 24, color: color}}/>
    </div>
    <div>
      <div style={{...primaryHeader}}>{idea.name}</div>
      <div style={{...secondaryText}}>{idea.teaser}</div>
    </div>
    <VoteButton idea={idea} />
  </li>
};