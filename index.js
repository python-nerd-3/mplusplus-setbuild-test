let questions = 0;
let set = [];
let encodedText = "";

function range(len) {
    return Array(len).keys()
};

function addQuestion() {
    questions += 1;
    let currentHtml = $("#textboxes-area").html()
    $("#textboxes-area").html(`
    ${currentHtml}
    <br />
    <textarea id="title${questions}">Title</textarea>
    <textarea id="a${questions}">Answer 1</textarea>
    <textarea id="2nda${questions}">Answer 2</textarea>`);
};

function getQuestions() {
    set = []
    for (i of range(questions)) {
        i += 1
        set.push(
            [
                $(`#title${i}`).val(),
                $(`#a${i}`).val(),
                $(`#2nda${i}`).val(),
            ]
        );
    };
    console.log(set);
};

function encodeQuestions() {
    encodedText = ""
    for (i of range(questions)) {
        i += 1
        encodedText += $(`#title${i}`).html() + ";;";
        encodedText += $(`#a${i}`).html() + ";;";
        encodedText += $(`#2nda${i}`).html()
        encodedText += "\\\\";
    }
    console.log(encodedText);
}
;
function decodeQuestions() {
    let newArray = []
    let input = $("#codeInput").val();
    console.log(input);
    let array = input.split("\\\\");
    console.log(array);
    for (i in array) {
        console.log(array[i]);
        newArray = array[i].split(";;");
        newArray.pop();
        array.splice(i, 1, newArray);
    };
    array.splice(array.length - 1, 1, ["Done!", "$D", "$N"]);
    console.log(array);
};