/*

 * Plugin Name:      responsiveTable

 * Description:      A javascript plugin to convert  table to responsive view,
                     Use with Bootstrap CSS library.
 
 * Version:          1.0.0

 * Author:           Sreejith K S

 * License:          Free

 * Contact:          sreeksleo@gmail.com | +91 9496232176

*/

(function () {

    this.responsiveTable = function (e) {

        var options;
        var tableList = [];
        var cardList = [];
        var tableCnt = 0;
        var defaults = {

            content: "table",

        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        init(this.options);
        window.addEventListener("resize", resizeEvent);

    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function init(e) {


        tableList = [];
        cardList = [];
        var tag = e.content;
        var _tableHead_Array = [];
        var _tableBody_Array = [];

        var _table = document.getElementsByTagName(tag);

        for (i = 0; i < _table.length; i++) {
            _tableName = _table[i];
            _tableHead_Array = [];
            _tableBody_Array = [];
            _tableBody_Array_Inner = [];
            _tableHead_Array_Inner = [];


            _rootElem = _table[i].getElementsByTagName('thead')[0];

            if (_rootElem != undefined && _rootElem != null) {


                _div = _rootElem.getElementsByTagName("tr");


                if (_div != undefined && _div != null) {
                    for (j = 0; j < _div.length; j++) {
                        elem = _div[j].getElementsByTagName("th");
                        var l = elem.length;
                        _tableHead_Array[j] = [];


                        for (k = 0; k < l; k++) {


                            _tableHead_Array[j][k] = (elem[k].innerHTML);


                        }

                    }
                }
            }


            _rootElem = _table[i].getElementsByTagName('tbody')[0];

            if (_rootElem != undefined && _rootElem != null) {

                _div = _rootElem.getElementsByTagName("tr");

                if (_div != undefined && _div != null) {
                    for (j = 0; j < _div.length; j++) {
                        elem = _div[j].getElementsByTagName("td");
                        var l = elem.length;
                        _tableBody_Array[j] = [];


                        for (k = 0; k < l; k++) {


                            _tableBody_Array[j][k] = (elem[k].innerHTML);
                        }

                    }
                }
            }


            createtableDiv(_tableName, _tableHead_Array, _tableBody_Array, i)
        }






        resizeTable();


    }


    function createtableDiv(_table, _Head_Array, _Body_Array, ind) {

        if (_table.getElementsByTagName('tbody')[0] != undefined) {

            _card = createCard(_table, _Head_Array, _Body_Array, ind);

            insertAfter(_table, _card);

            this.tableList.push(_table);
            this.cardList.push(_card);

        }

    }

    function createCard(_tableName, _tableHead_Array, _tableBody_Array, ind) {




        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-content';

       

        let tableData = document.createElement('div');
        let codeBlock;

        for (var a = 0; a < _tableBody_Array.length; a++) {

            for (var b = 0; b < _tableBody_Array[a].length; b++) {



                codeBlock =
                    '<div class="col-md-12 mt-2 mb-2">' +
                    '<div class="row">' +
                    '<div class="col-md-6 bg-light text-dark">' + _tableHead_Array[0][b] + '</div>' +
                    '<div class="col-md-6 bg-light text-dark border border-black border-top-1 border-right-0 border-bottom-0 border-left-0 ">' + _tableBody_Array[a][b] + ' </div>' +
                    '</div></div>';

                tableData.innerHTML += codeBlock;


            }

            tableData.innerHTML += "<div class='border border-grey w-100 mt-2'></div>";
        }





      
        cardBody.appendChild(tableData);
        card.appendChild(cardBody);


        return card;

    }

    function resizeEvent(e) {

        resizeTable()
    }

    function resizeTable() {



        if ($('body').width() < 768) {
            for (i = 0; i < this.tableList.length; i++) {
                this.tableList[i].style.display = "none";
                this.cardList[i].style.display = "block";
            }
        } else {
            for (j = 0; j < this.tableList.length; j++) {
                this.tableList[j].style.display = "table";
                this.cardList[j].style.display = "none";
            }
        }
    }

    function detectMob() {
        const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }

    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

}());




/*

 * Plugin Name:      responsiveTable

 * Description:      A javascript plugin to convert  table to responsive view,
                     Use with Bootstrap CSS library.
 
 * Version:          1.0.0

 * Author:           Sreejith K S

 * License:          Free

 * Contact:          sreeksleo@gmail.com | +91 9496232176
 

*/
