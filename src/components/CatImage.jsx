import React from "react";
import styled from "styled-components";
import {ClipLoader} from "react-spinners";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto
`;

function CatImage({imageUrl}) {
    return (
        <Wrapper>
            {imageUrl
                ? <img src={imageUrl} alt="Random cat"/>
                : <ClipLoader color={'saddlebrown'}/>
            }
        </Wrapper>
    );
}

export default CatImage;

