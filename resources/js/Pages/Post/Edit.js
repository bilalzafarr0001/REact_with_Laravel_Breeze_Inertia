import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Edit(props) {
    const [title, setTitle] = useState(props.post.title);
    const [description, setDescription] = useState(props.post.description);
    console.log("props of edit page ", props);

    // useEffect(() => {
    //     return () => {
    //         const abortController = new AbortController();
    //         abortController.abort();
    //     };
    // }, []);

    const updateUser = (event) => {
        event.preventDefault();

        Inertia.patch(`/posts/${props.post.id}`, {
            title,
            description,
        }).then(() => {});
    };

    const deleteUser = (event) => {
        event.preventDefault();

        if (confirm("Are you sure you want to delete this Post?")) {
            Inertia.delete(`/posts/${props.post.id}`).then(() => {});
        }
    };

    return (
        <div
            style={{ minHeight: "100vh" }}
            class="flex  justify-center items-center"
        >
            <form
                class="w-full max-w-sm  "
                action="/users"
                method="POST"
                onSubmit={updateUser}
            >
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label
                            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="inline-full-name"
                        >
                            Title
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input
                            type="text"
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="name"
                            defaultValue={props.post.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label
                            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="inline-full-name"
                        >
                            Description
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input
                            type="text"
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="text"
                            defaultValue={props.post.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button
                            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Update Post
                        </button>
                        {"   "}
                        <button
                            class="shadow white hover:bg-purple-500 focus:shadow-outline focus:outline-none hover:text-white text-gray-800 font-bold py-2 px-4 rounded"
                            onClick={deleteUser}
                        >
                            Delete Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
