/*by zhuhy*/
window.onload = function () {
    initPage();
}

function openPicker(type) {
    var options = []
    var picker = new mui.PopPicker()

    console.log(type)
    switch (type) {
        case ('retailtype'):
            options = [
                { value: '0', text: '零售类型0' },
                { value: '1', text: '零售类型1' },
                { value: '2', text: '零售类型2' },
                { value: '3', text: '零售类型3' },
            ];
            break;
        case ('saletype'):
            options = [
                { value: '0', text: '销售类型0' },
                { value: '1', text: '销售类型1' },
                { value: '2', text: '销售类型2' },
                { value: '3', text: '销售类型3' },
            ];
            break;
        case ('producttype'):
            options = [
                { value: '0', text: '产品型号0' },
                { value: '1', text: '产品型号1' },
                { value: '2', text: '产品型号2' },
                { value: '3', text: '产品型号3' },
            ];
            break;
    }

    picker.setData(options);
    picker.show(function (selectItems) {
        console.log(selectItems[0].text);
        console.log(selectItems[0].value);
        var x = document.getElementsByName(type);
        x[0].value = selectItems[0].text
    })
}

function openCascadePicker(type) {
    var options = []
    var picker = new mui.PopPicker({
        layer: 2
    });

    switch (type) {
        case ('address'):
            options = [
                {
                    value: '110000',
                    text: '北京市',
                    children: [
                        {
                            value: "110101",
                            text: "东城区"
                        }
                    ]
                },
                {
                    value: '120000',
                    text: '天津市',
                    children: [
                        {
                            value: "120101",
                            text: "和平区"
                        }, {
                            value: "120102",
                            text: "河东区"
                        }, {
                            value: "120104",
                            text: "南开区"
                        }
                    ]
                }
            ];
            break;
    }

    picker.setData(options);

    picker.pickers[0].setSelectedIndex(1);
    picker.pickers[1].setSelectedIndex(1);

    picker.show(function (SelectedItem) {
        console.log(SelectedItem);

        var address = ""

        for (var i of SelectedItem)
            address += i.text

        var x = document.getElementsByName(type);
        x[0].value = address
    })
}

function openDtPicker(type) {
    console.log(type)
    var dtPicker = new mui.DtPicker();
    dtPicker.show(function (selectItems) {
        console.log(selectItems.y);//{text: "2016",value: 2016} 
        console.log(selectItems.m);//{text: "05",value: "05"} 
        var x = document.getElementsByName(type);
        x[0].value = selectItems.y.text + '-' + selectItems.m.text + '-' + selectItems.d.text
    })
}

function initPage() {
    console.log("initPage triggered!");
};