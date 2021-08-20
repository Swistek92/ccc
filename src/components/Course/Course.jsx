import React from 'react';
import bemCssModules from 'bem-css-modules';
import { StoreContext } from "../../store/StoreProvider";

import { default as CourseStyles } from "./Course.module.scss";

const style = bemCssModules(CourseStyles);

const Course = ({ authors, img, price, title }) => {

  const allAuthors = authors.join(', ');


  return (
    <li>
      <article className={style()}>
        <h3 className={style('title')}> {title}</h3>
        <img alt={title} className={style('image')} src={"https://www.rcsdk8.org/sites/main/files/main-images/camera_lense_0.jpeg"} />
        <p className={style('price')}>{`koszt kursu: ${price} zł`}</p>
        <p className={style('authors')}>{`autorzy krusu: ${allAuthors}`}</p>

      </article>

    </li>
  );
};

export default Course;