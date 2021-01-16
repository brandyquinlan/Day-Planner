function dayPlanner() {
    $(document).ready(function() {
        var momentVar = moment().format('dddd, MMMM Do, YYYY   h:mma');
        var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm",
            "5pm"
        ]

        // display current day
        function currentDay() {
            var currentDay = $("#currentDay").text(momentVar);
            return currentDay;
        }
        currentDay();

        // display time blocks for standard business hours
        var row;
        var timeCol;

        for (i = 0; i < workHours.length; i++) {
            var row = $("<div>").addClass("row");
            var timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
            var inputCol = $("<input>").attr("placeholder", "").addClass("hourInput time-block");
            saveBtn = $("<button>").addClass("btn saveBtn").text("save");
            $(row).append(timeCol).append(inputCol).append(saveBtn);
            $("#calendar").append(row);
        }

        // add ids to input fields
        function addIdToInput() {
            var inputId = document.getElementsByClassName("hourInput");
            for (i = 0; i < inputId.length; i++) {
                inputId[i].id = "inputField-id" + (i + 1);
            }
        };
        addIdToInput();

        // add ids to save buttons
        function addIdToSaveBtn() {
            var saveBtnId = document.getElementsByClassName("saveBtn");
            for (i = 0; i < saveBtnId.length; i++) {
                saveBtnId[i].id = ["saveBtn-id" + (i + 1)];
            }
        }
        addIdToSaveBtn();

        // var saveBtnId = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var saveBtnId1 = $("#saveBtn-id1");
        var saveBtnId2 = $("#saveBtn-id2");
        var saveBtnId3 = $("#saveBtn-id3");
        var saveBtnId4 = $("#saveBtn-id4");
        var saveBtnId5 = $("#saveBtn-id5");
        var saveBtnId6 = $("#saveBtn-id6");
        var saveBtnId7 = $("#saveBtn-id7");
        var saveBtnId8 = $("#saveBtn-id8");
        var saveBtnId9 = $("#saveBtn-id9");

        var entryInput1 = $("#inputField-id1");
        var entryInput2 = $("#inputField-id2");
        var entryInput3 = $("#inputField-id3");
        var entryInput4 = $("#inputField-id4");
        var entryInput5 = $("#inputField-id5");
        var entryInput6 = $("#inputField-id6");
        var entryInput7 = $("#inputField-id7");
        var entryInput8 = $("#inputField-id8");
        var entryInput9 = $("#inputField-id9");


        // display colors for past, present, future events

        var nowHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        var inputFieldIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        var now = new Date().getHours();

        for (var i = 0; i < nowHours.length; i++) {
            if (now > nowHours[i]) {
                $("#inputField-id" + inputFieldIndex[i]).addClass("past");
            } else if (now >= nowHours[i] && now < nowHours[i] + 1) {
                $("#inputField-id" + inputFieldIndex[i]).addClass("present");
            } else if (now < nowHours[i]) {
                $("#inputField-id" + inputFieldIndex[i]).addClass("future");
            }
        };

        // click events get input and save to local storage

        $(saveBtnId1).on("click", function(event) {
            event.preventDefault();
            var entryInput1 = $("#inputField-id1").val().trim();
            localStorage.setItem("entry1", (entryInput1));
        });
        var savedInput1 = (localStorage.getItem("entry1"));
        entryInput1.val(savedInput1);

        $(saveBtnId2).on("click", function(event) {
            event.preventDefault();
            var entryInput2 = $("#inputField-id2").val().trim();
            localStorage.setItem("entry2", (entryInput2));
        });
        var savedInput2 = (localStorage.getItem("entry2"));
        entryInput2.val(savedInput2);

        $(saveBtnId3).on("click", function(event) {
            event.preventDefault();
            var entryInput3 = $("#inputField-id3").val().trim();
            localStorage.setItem("entry3", (entryInput3));
        });
        var savedInput3 = (localStorage.getItem("entry3"));
        entryInput3.val(savedInput3);

        $(saveBtnId4).on("click", function(event) {
            event.preventDefault();
            var entryInput4 = $("#inputField-id4").val().trim();
            localStorage.setItem("entry4", (entryInput4));
        });
        var savedInput4 = (localStorage.getItem("entry4"));
        entryInput4.val(savedInput4);

        $(saveBtnId5).on("click", function(event) {
            event.preventDefault();
            var entryInput5 = $("#inputField-id5").val().trim();
            localStorage.setItem("entry5", (entryInput5));
        });
        var savedInput5 = (localStorage.getItem("entry5"));
        entryInput5.val(savedInput5);

        $(saveBtnId6).on("click", function(event) {
            event.preventDefault();
            var entryInput6 = $("#inputField-id6").val().trim();
            localStorage.setItem("entry6", (entryInput6));
        });
        var savedInput6 = (localStorage.getItem("entry6"));
        entryInput6.val(savedInput6);

        $(saveBtnId7).on("click", function(event) {
            event.preventDefault();
            var entryInput7 = $("#inputField-id7").val().trim();
            localStorage.setItem("entry7", (entryInput7));
        });
        var savedInput7 = (localStorage.getItem("entry7"));
        entryInput7.val(savedInput7);

        $(saveBtnId8).on("click", function(event) {
            event.preventDefault();
            var entryInput8 = $("#inputField-id8").val().trim();
            localStorage.setItem("entry8", (entryInput8));
        });
        var savedInput8 = (localStorage.getItem("entry8"));
        entryInput8.val(savedInput8);

        $(saveBtnId9).on("click", function(event) {
            event.preventDefault();
            var entryInput9 = $("#inputField-id8").val().trim();
            localStorage.setItem("entry9", (entryInput9));
        });
        var savedInput9 = (localStorage.getItem("entry9"));
        entryInput9.val(savedInput9);
    });
}
dayPlanner();