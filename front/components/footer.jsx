import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <MDBBtn size="lg" tag="a" floating social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="gplus">
        <MDBIcon fab icon="google-plus-g" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="pin">
        <MDBIcon fab icon="pinterest" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="yt">
        <MDBIcon fab icon="youtube" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="vk">
        <MDBIcon fab icon="vk" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="so">
        <MDBIcon fab icon="stack-overflow" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="slack">
        <MDBIcon fab icon="slack" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="git">
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="comm">
        <MDBIcon icon="comments" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="dribbble">
        <MDBIcon icon="dribbble" />
      </MDBBtn>
    </MDBContainer>
  );
}

export default SocialButtonsPage;