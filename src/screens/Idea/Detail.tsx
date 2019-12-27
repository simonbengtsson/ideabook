import React from "react";
import {useHistory, useParams} from "react-router";
import {ideasModel} from "../../mockData";
import {IdeaRow} from './Row'
import {IoIosMore, IoMdArrowBack} from "react-icons/all";
import {Navbar, NavbarButton, Page} from "../../common/Navbar";
import {primaryText} from "../../common/common";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const IdeaDetailScreen: React.FC = () => {
  let history = useHistory();
  let {id} = useParams();
  const ideaId = parseInt(id as string);
  const idea = ideasModel[ideaId];

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLElement|null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const editClicked = () => {
    history.push(`/ideas/${ideaId}/edit`);
  };

  const deleteClicked = () => {
    delete ideasModel[ideaId];
    console.log(ideaId, ideasModel);
    history.goBack();
  };

  const images = idea.images.map((img, index) => {
    return <img key={index} style={{width: 100, paddingRight: 8, height: 200}} alt={'Pitch'} src={img} />
  });

  return (
    <div>
      <Navbar>
        <NavbarButton onClick={() => history.goBack()}>
          <IoMdArrowBack />
        </NavbarButton>
        <div style={{marginLeft: 'auto'}}>
          <NavbarButton onClick={handleClick}>
            <IoIosMore style={{paddingRight: 16}} />
          </NavbarButton>
        </div>
      </Navbar>
      <Menu
        anchorEl={menuAnchorEl}
        keepMounted
        open={menuAnchorEl != null}
        onClose={() => setMenuAnchorEl(null)}
      >
        <MenuItem onClick={editClicked}>Edit</MenuItem>
        <MenuItem onClick={deleteClicked}>Delete</MenuItem>
      </Menu>
      <Page>
        <IdeaRow key={ideaId} idea={idea} />
        <p style={{...primaryText}}>{idea.pitch}</p>
        <div style={{whiteSpace: 'nowrap', overflow: 'scroll'}}>
          {images}
        </div>
      </Page>
    </div>
  );
};