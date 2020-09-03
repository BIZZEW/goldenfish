/*by zhuhy*/
window.onload = function () {
    initPage();
}

var picker

function openPicker(type) {
    if (!picker || picker.disposed) {
        var options = []
        picker = new mui.PopPicker()

        picker.cancel.addEventListener('tap', function (event) {
            picker.dispose()
        }, false);

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
            picker.dispose()
        })
    } else {
        picker.hide()
        picker.dispose()
    }
}

function openCascadePicker(type) {
    if (!picker || picker.disposed) {
        var options = []
        picker = new mui.PopPicker({
            layer: 2
        });

        picker.cancel.addEventListener('tap', function (event) {
            picker.dispose()
        }, false);

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
            var address = ""

            for (var i of SelectedItem)
                address += i.text

            var x = document.getElementsByName(type);
            x[0].value = address
            picker.dispose()
        })
    } else {
        picker.hide()
        picker.dispose()
    }
}

function openDtPicker(type) {
    if (!picker || picker.disposed) {
        picker = new mui.DtPicker();

        picker.ui.cancel.addEventListener('tap', function (event) {
            picker.dispose()
        }, false);

        picker.show(function (selectItems) {
            var x = document.getElementsByName(type);
            x[0].value = selectItems.y.text + '-' + selectItems.m.text + '-' + selectItems.d.text
            picker.dispose()
        })
    }
    else {
        picker.hide()
        picker.dispose()
    }
}

function initPage() {
    console.log("initPage triggered!");
};