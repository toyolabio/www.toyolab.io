import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

// // const Avatar = styled.img`
// //   width: 300px;
// //   height: 300px;
// //   border-radius: 9999px;
// `
const Wrapper = styled.div``

const Member = ({ memberData }) => (
  <Wrapper>
    <h1>{memberData.frontmatter.name}</h1>
    <div className="team card-two">
      <div className="card-header">
        <div className="card-header-left">
          {memberData.frontmatter.avatar && (
            <div className="card-image">
              {/* <Avatar
                src={memberData.frontmatter.avatar.childImageSharp.fixed.src}
              /> */}
              <Image
                fixed={memberData.frontmatter.avatar.childImageSharp.fixed}
                style={{ borderRadius: 9999, width: 300, height: 300 }}
                backgroundColor={memberData.frontmatter.color}
              />
            </div>
          )}
        </div>
        <div className="card-right" />
      </div>
      <div
        className="team-content"
        dangerouslySetInnerHTML={{ __html: memberData.html }}
      />
    </div>
  </Wrapper>
)

export default Member
