import { useContext, useEffect, useState } from "react";

export default function CreatePostForm() {
    return <>
        <h1>Create Post</h1>
        <form aria-label="post">

            <h2>Post</h2>

            <label for="title">Post Title:</label>
            <input type="text" id="title" name="title" required />

            <label for="pic">Picture</label>
            <input type="text" id="pic" name="picture" placeholder="Picture URL"/>

            <label for="Address">Add Address</label>
            <input type="text" name="address" id="address" placeholder="Address" required />

            <lable for='description'>Add Description</lable>
            <input type='text' id='description' name='picture' placeholder="Description"/>

            <button>Upload</button>
        </form>
    </>
}