////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '40',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: true,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: false, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'online',
            'on-campus',
            'blended'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: true, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'admin',
            'teacher'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '1234',
            '987654'
        ],
		 // OPTIONAL: Relocate Ally alternative formats dropdown and hide heading
		 overrideAllyHeadings: false,
		 // OPTIONAL: Make assignment rubrics sortable
		 sortableRubrics: false,
		 // OPTIONAL: Transform people page ina course to show student cards
		 showStudentCards: false
};

// Run the necessary code when a page loads
$(document).ready(function () {
    'use strict';
    // This runs code that looks at each page and determines what controls to create
    $.getScript(DT_variables.path + 'js/master_controls.js', function () {
        console.log('master_controls.js loaded');
    });
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// H5P resize script.                             //
////////////////////////////////////////////////////

var h5pScript = document.createElement('script');
h5pScript.setAttribute('charset', 'UTF-8');
h5pScript.setAttribute('src', 'https://h5p.com/canvas-resizer.js');
document.body.appendChild(h5pScript);

////////////////////////////////////////////////////
// END H5P resize script.                         //
////////////////////////////////////////////////////