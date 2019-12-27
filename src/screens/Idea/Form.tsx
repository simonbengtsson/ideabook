import React, {useState} from "react";
import {useParams} from "react-router";
import {Idea, ideasModel} from "../../mockData";
import {IoMdMegaphone} from "react-icons/all";
import {primaryColor, secondaryText} from "../../common/common";
import {MdClose} from "react-icons/all";
import {useHistory} from "react-router";
import {Navbar, NavbarButton, Page} from "../../common/Navbar";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const IdeaForm: React.FC = () => {
  let history = useHistory();
  let params: any = useParams();
  const id = params.id || Object.values(ideasModel).length;
  const isCreating = params.id == null;
  let ideaInput: Idea;

  if (!isCreating) {
    ideaInput = ideasModel[id];
  } else {
    ideaInput = {
      id: '' + Object.keys(ideasModel).length,
      name: '',
      teaser: '',
      icon: IoMdMegaphone,
      color: '#8ad0ff',
      voteCount: 24,
      votedAt: null,
      images: [],
      pitch: ''
    }
  }

  const [idea, setIdea] = useState(ideaInput);

  const saveClicked = () => {
    ideasModel[id] = {...idea};
    history.goBack()
  };

  return (
    <div>
      <Navbar>
        <NavbarButton onClick={() => history.goBack()}>
          <MdClose />
        </NavbarButton>
      </Navbar>
      <Page>
        <div className="page">
          <form noValidate>
            <TextField fullWidth value={idea.name} label="Name" onChange={e => { setIdea({...idea, name: e.target.value})  }} /><br/><br/>
            <TextField fullWidth value={idea.teaser}  label="Teaser" onChange={e => { setIdea({...idea, teaser: e.target.value})  }} /><br/><br/>
            <TextField fullWidth value={idea.pitch} label="Pitch" onChange={e => { setIdea({...idea, pitch: e.target.value})  }} multiline />
          </form>
          <Button onClick={() => saveClicked() } style={{color: '#fff', marginTop: 28, borderRadius: 100}} fullWidth variant="contained" size="medium" color='primary'>{isCreating ? 'Add' : 'Update'}</Button>
        </div>
      </Page>
    </div>
  );
};

const styles = {
  fullButton: {backgroundColor: primaryColor, padding: 8, color: 'white', fontSize: 18, borderRadius: 100, border: 0, width: '100%'},
  ideaInput: {
    marginLeft: 18,
    flex: 1,
    marginBottom: 18
  },
  inputLabel: {
    marginBottom: 18,
    display: 'block',
    ...secondaryText,
    lineHeight: '38px',
  }
};