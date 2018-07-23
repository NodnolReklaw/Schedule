import { FETCH_COURSE } from './types';

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships."
            },
            {
                title: "HTML/CSS Bootcamp",
                description: "Stufffffffffffffffffffffffffffffffffff"
            },
            {
                title: "UX for Developers",
                description: "Other stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuf"
            }
        ]
    }
}