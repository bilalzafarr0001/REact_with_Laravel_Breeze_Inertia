import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Create(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const createUser = (event) => {
        event.preventDefault();

        Inertia.post("/posts", {
            title,
            description,
        }).then(() => {
            // code
        });
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
                onSubmit={createUser}
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
                            placeholder="Title"
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
                            placeholder="Description"
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
                            Create Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
