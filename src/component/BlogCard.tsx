import React from "react";
import {BlogEntry} from "../model/BlogEntry";
import "./BlogCard.css"

type CharacterCardProps = {
    blogEntry: BlogEntry
}

export default function BlogCard(props: CharacterCardProps){
    return (
        <section className={"blog-card"}>
            <h3 className={"h3"}>{props.blogEntry.title}</h3>
            <h4>{props.blogEntry.content}</h4>
            <p>Eintrag von: {props.blogEntry.author}</p>

        </section>
    )
}