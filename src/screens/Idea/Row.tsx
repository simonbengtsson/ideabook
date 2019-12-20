import React, {useState} from "react";
import {useHistory} from "react-router";
import {ideasModel} from "../../mockData";
import Color from "color";
import {IoMdArrowDropup} from "react-icons/all";
import {primaryColor} from "../../common/common";

type Props = {
  idea: any,
  index: number
}

export const IdeaRow: React.FC<Props> = (props) => {
  const { idea, index } = props;

  let history = useHistory();
  const [ideas, setIdeas] = useState(Object.values(ideasModel));

  const toggleVote = (index: number) => {
    const idea = ideas[index];
    idea.votedAt = idea.votedAt ? null : new Date();
    idea.voteCount = idea.votedAt ? idea.voteCount + 1 : idea.voteCount - 1;
    setIdeas([...ideas]);
  };

  const navigateToIdea = (index: number) => {
    history.push('/ideas/' + index);
  };

  const Icon = idea.icon;
  const color = Color(idea.color).darken(0.5).rgb().string();
  return <li style={{cursor: 'pointer', display: 'flex', marginBottom: 8, alignItems: 'center'}}
             onClick={() => {
               navigateToIdea(index)
             }}>
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
      <div style={{fontWeight: 700}}>{idea.name}</div>
      <div>{idea.teaser}</div>
    </div>
    <span onClick={(event) => {
      event.stopPropagation();
      toggleVote(index)
    }} style={{
      padding: 8,
      borderRadius: 5,
      border: 'solid 1px',
      borderColor: idea.votedAt ? primaryColor : '#ccc',
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      userSelect: 'none',
      alignItems: 'center'
    }}>
              <IoMdArrowDropup style={{color: idea.votedAt ? primaryColor : 'black'}}/>
              <div style={{color: idea.votedAt ? primaryColor : 'black'}}>{idea.voteCount}</div>
          </span>
  </li>
};