/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function getUfs() {
    let query = "/cycles/read?course_code=" + courseCode;
    $.ajax({
        method: "GET",
        url: "https://morning-peak-25234.herokuapp.com" + query,
        dataType: "json",
    }).done(function(cycle) {
        fillUfList(cycle);
    }).fail(function() {
        alert("Ha habido un error.");
    });

}

function saveUfsList() {
    let query = "/student/import/ufs?email=" + user.email + "&json=" + ufsList;

    $.ajax({
        method: "GET",
        url: "https://morning-peak-25234.herokuapp.com" + query,
        dataType: "text",
    }).done(function() {
        alert("UFs guardadas correctamente");
    }).fail(function() {
        alert("Ha habido un error.");
    });
}


function showUfs(cycle) {

	cycle[0].modules.sort();
    cicle[0].modules.forEach(m => {
        addCollapsibleLi(m.module_code, m.module_name);
        m.ufs.forEach(uf => {
            addCheckbox(m.codi_modul, u.uf_name);
        });
    });

	checkboxList = $(".selected");

    checkboxList.click(function() {
        isChecked = false;
        for (let i = 1; i < checkboxList.length; i++) {
            if (checkboxList[i].checked) {
                isChecked = true;
            } else {
                isChecked = false;
                break;
            }
        }
        
        if (isChecked) {
            selectAll.checked = true;
        } else {
            selectAll.checked = false;
        }
    });
}

function addCollapsibleLi(id, content) {
    $("#collapsibleContainer").append('<li><div class="collapsible-header"><i class="material-icons">more_horiz</i>' + content + '</div><div id="' + id + '" class="collapsible-body custom-padding-top-bottom-1rem"></div></li>');
}

function addCheckbox(id, content) {
    $("#" + id).append('<p><label><input id="' + content + '" name="UF-chk" type="checkbox" class="filled-in waves-effect waves-grey grey darken-3 orange-text" checked="false"/><span>' + content + '</span></label></p>');
}

function toggleCheckbox(id) {
    document.getElementById(id).toggleAttribute("checked");
}

function selectAllCheckbox() {
    $(".selected").prop('checked', "checked");
}

function unselectAllCheckbox() {
    $(".selected").prop('checked', false);
}

function getSelectedCheckbox() {
    let checkedList = $('input[name="UF-chk"]:checked');
    let arrayUF = []
    
    if (checkedList.length > 0) {
        arrayUF = [];
        for (let i = 0; i < checkedList.length; i++) {
            arrayUF.push(checkedList[i].id.toString());
        }
        console.log(arrayUF);
        return JSON.stringify(arrayUF);
    }

    return [];
}

