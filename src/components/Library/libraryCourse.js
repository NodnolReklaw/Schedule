import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course-title">Prolem Solving</label>
                {/*icon comonent */}
                {/*arrow component */}
                {/*action button comonent */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales mollis tristique. Sed turpis erat, efficitur sed aliquam quis, placerat in orci. Mauris mattis erat non eros sollicitudin, ac viverra risus egestas. Pellentesque non sem porttitor, fringilla dolor sed, ornare lorem. Proin risus augue, luctus eget tempor vitae, lobortis id felis. </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;