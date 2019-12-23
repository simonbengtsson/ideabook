import React from "react";
import {useHistory, useParams} from "react-router";
import {ideasModel} from "../../mockData";
import {IdeaRow} from './Row'
import {IoIosMore, IoMdArrowBack} from "react-icons/all";
import {Navbar, NavbarButton, Page} from "../../common/Navbar";
import {primaryHeader, primaryText, secondaryText} from "../../common/common";

export const IdeaDetailScreen: React.FC = () => {
  let history = useHistory();
  let {id} = useParams();
  const index = parseInt(id as string);
  const idea = Object.values(ideasModel)[index];

  const images = idea.images.map((img, index) => {
    return <img key={index} style={{width: 100, paddingRight: 8, height: 200}} alt={'Pitch'} src={img} />
  });

  return (
    <div>
      <Navbar>
        <NavbarButton onClick={() => history.goBack()}>
          <IoMdArrowBack />
        </NavbarButton>
        <div style={{marginLeft: 'auto', fontSize: 28}}>
          <IoIosMore style={{paddingRight: 16}} onClick={() => history.push(`/ideas/${index}/update`)} />
        </div>
      </Navbar>
      <Page>
        <IdeaRow key={index} idea={idea} index={index} />
        <p style={{...primaryText}}>{idea.pitch}</p>
        <div style={{whiteSpace: 'nowrap', overflow: 'scroll'}}>
          {images}
        </div>
      </Page>
    </div>
  );
};