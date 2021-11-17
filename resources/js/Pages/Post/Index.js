import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Index(props) {
    console.log("propse", props);
    return (
        <div className="container mt-5 mx-auto my-auto">
            {props.successMessage && (
                <div className="alert alert-success mt-4">
                    {props.successMessage}
                </div>
            )}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="/posts/create" className="btn btn-primary">
                    Create Post
                </a>
            </button>
            <div className="my-5 mx-auto "></div>

            <table className="table table-striped mx-10">
                <thead>
                    <tr>
                        <th class="px-4 py-2">ID</th>
                        <th class="px-4 py-2">Title</th>
                        <th class="px-4 py-2">Description</th>
                        <th class="px-4 py-2">Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {props.posts.data.map((post) => (
                        <tr key={post.id} class="bg-gray-100">
                            <td class="border px-4 py-2">{post.id}</td>
                            <td class="border px-4 py-2">{post.title}</td>
                            <td class="border px-4 py-2">{post.description}</td>
                            <td class="border px-4 py-2">
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    <InertiaLink
                                        href={`/posts/${post.id}/edit`}
                                    >
                                        Edit
                                    </InertiaLink>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
