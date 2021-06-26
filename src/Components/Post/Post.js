import React, { useState } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button, Header, Modal} from 'semantic-ui-react';

const Post = ({ post }) => {
    const [open, setOpen] = React.useState(false)

    return( <><Card style={{margin: 20}}>
        <Image src={post.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header onClick={()=>setOpen(true)} className="card-name">{post.owner.firstName} {post.owner.lastName}</Card.Header>
          <Card.Meta>
                {post.tags.map(tag => (
                   <Link to='/tag'> <span className='date'>#{tag}</span> </Link>
                ))}
          </Card.Meta>
          <Card.Description>
            {post.text}
          </Card.Description>
          <Card.Meta>
          {post.publishDate}
          </Card.Meta>
          <Card.Description>
            {post.link}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='like' />
            {post.likes}
          </a>
        </Card.Content>
      </Card>
      {/* //modal */}
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={post.owner.picture} wrapped />
        <Modal.Description>
          <Header>{post.owner.firstName}</Header>
          <p>
            {post.owner.lastName}
          </p>
          <p>{post.owner.email}}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
      </>)
}

export default Post;

