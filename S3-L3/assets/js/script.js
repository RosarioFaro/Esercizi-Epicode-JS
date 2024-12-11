let data = [];

function aggData() {
    let dataInput = document.querySelector('#input');

    let obj = {
        testo: dataInput.value
    };

    data.push(obj);
    resetForm(dataInput);
    dataInputList();
}

function resetForm(dataInput) {
    dataInput.value = '';
}

function dataInputList() {
    let dataList = document.querySelector('section');
    dataList.innerHTML = '';

    let listaUn = document.createElement('ul');
    data.forEach((ele, i) => {
        let li = document.createElement('li');
        li.innerHTML = `${ele.testo} <span><button onclick="deleteData(${i})"><i class="fas fa-times-circle"></i></button></span>`;
        
        li.addEventListener('click', () => {
            if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = 'none';
            } else {
                li.style.textDecoration = 'line-through';
            }
        });

        listaUn.appendChild(li);
    });

    dataList.appendChild(listaUn);
}

function deleteData(i) {
    data.splice(i, 1)
    dataInputList()
}