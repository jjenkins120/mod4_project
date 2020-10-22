import React from 'react'
import { Button, Icon, Label, Reveal, Segment,Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLike } from '../actions/notes'


class NoteTile extends React.Component {
    
    handleClick = (id) => {
      const updatedLikes = {
        likes: this.props.note.likes + 1
      }
      const reqObj = {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedLikes)
      }
      console.log(updatedLikes)
      fetch(`http://localhost:3000/notes/${id}`, reqObj)
      .then(resp => resp.json())
      .then(updatedNote => {
        this.props.addLike(updatedNote.id)
      })
    }

    render(){
      return (
        <div>
            {/* {this.props.note.title}
            <br/>{this.props.note.content}<br/>
            <Link to={`/shownote/${this.props.note.id}`}><Button icon color='blue'><Icon name='eye' /></Button></Link>
            <Button as='div' labelPosition='right'>
              <Button icon color='red' onClick={() => this.handleClick(this.props.note.id)}>
                <Icon name='heart' />
              </Button>
              <Label as='a' basic pointing='left'>
                {this.props.note.likes}
              </Label>
            </Button> */}

            <Reveal animated='move down'>
              <Reveal.Content visible>
                <Segment style={{ width: 510 }} >
                <div style={{ fontSize: "large"}}>{this.props.note.title}</div>
                <div>. . .</div>
                <div>{this.props.note.content}</div>
                </Segment>
              </Reveal.Content>
              <Reveal.Content hidden>
                {/* <Container textAlign='center' verticalAlign='middle'> */}
                <Link to={`/shownote/${this.props.note.id}`}><Button icon color='blue' style={{ marginTop: 32, marginRight: 15, width: 80 }}><Icon name='eye' /></Button></Link>
                  <Button as='div' labelPosition='right'>
                    <Button icon color='red' onClick={() => this.handleClick(this.props.note.id)}>
                      <Icon name='heart' />
                    </Button>
                    <Label as='a' basic pointing='left'>
                      {this.props.note.likes}
                    </Label>
                  </Button>
                {/* </Container> */}
              </Reveal.Content>
            </Reveal>
            {/* <Button secondary>Add to Favorites</Button> */}
            {/* View Link that takes user to show page (will need id) */}
            {/* Edit Link that takes user to the edit page (will need id) */}
          
        </div>
      );
    }
  }
  

  const mapDispatchToProps = {
    addLike
  }

  export default connect(null, mapDispatchToProps)(NoteTile);
  