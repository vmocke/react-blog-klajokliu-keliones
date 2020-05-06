import React from 'react';
import ImgComp from '../../ImgComp/ImgComp';

interface PostShowExtraContent {
    extraContent?: any[];
    classNamePostShowExtraContent?: any;
    classNamePostShowExtraContentImgs: any;
}

const PostShowExtraContent = (props: PostShowExtraContent) => {
    return (
        <React.Fragment>
            {props.extraContent && props.extraContent.length !== 0
                ? props.extraContent.map((item: { imgUrl: string[]; title: string; text: string }, index: number) => {
                      return (
                          <div className={props.classNamePostShowExtraContent} key={index}>
                              <div className={props.classNamePostShowExtraContentImgs}>
                                  {item.imgUrl &&
                                      item.imgUrl.map((imgLink, index: number) => {
                                          return <ImgComp key={index} src={imgLink} ImgInlineBorder={false} />;
                                      })}
                              </div>
                              {item.title && <h4>{item.title}</h4>}
                              {item.text && <p>{item.text}</p>}
                          </div>
                      );
                  })
                : null}
        </React.Fragment>
    );
};

export default PostShowExtraContent;
