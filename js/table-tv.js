/// input data start
var description = 'Олег Марков, гениальный хирург, собирается покончить с жизнью. От отчаянного поступка его спасает звонок с работы. На кону жизнь 10-летнего мальчишки. Олег спасает ребенка. Мальчишка напоминает ему о молодости, упущенных возможностях. Когда-то мир был наполнен смыслом. Он играл на гитаре, любил. В студенческие годы в него была влюблена смешная девчонка Марта. Спустя 10 лет Марта перевернет его мир. И уже он - Олег будет готов бросить к ее ногам весь мир. Откажется от семьи. Только вот роковая авария навсегда разлучит их, и Марта исчезнет из его жизни, но не из сердца. И вот сейчас возле кровати спасенного мальчишки сидит она - Марта...';
var TYPE_CHANNEL = {
    'default': 0,
    sport: 1,
    mult: 2,
    music: 3,
    HD: 4,
    series: 5,
    documental: 6
};
var rus24Items = [
    { time: '01:05', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Бедная Liz' },
    { time: '03:20', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Космический камикадзе. Угол атаки Георгия Берегового' },
    { time: '04:40', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Двое в пути' },
    { time: '05:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.music], title: 'Утро России' },
    { time: '09:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.music], title: 'Вести' },
    { time: '09:15', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.music], title: 'Утро России' },
    { time: '09:55', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.music], title: 'О самом главном' },
    { time: '11:55', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.music], title: 'Местное время. Вести-Москва' },
    { time: '11:55', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.music], title: 'Тайны следствия-10. Кровь за кровь' },
    { time: '14:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.series], title: 'Вести' },
    { time: '14:30', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.series], title: 'Местное время. Вести-Москва' },
    { time: '14:50', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.series], title: 'Вести. Дежурная часть' },
    { time: '15:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.series], title: 'Без следа. 17-я серия' },
    { time: '16:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.series], title: 'Без следа. 18-я серия' },
    { time: '17:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Вести' },
    { time: '17:30', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Местное время. Вести-Москва' },
    { time: '17:50', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Вести' },
    { time: '18:15', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Прямой эфир' },
    { time: '19:35', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Местное время. Вести-Москва' },
    { time: '20:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Вести' },
    { time: '21:00', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: 'Юморина' },
    { time: '22:30', category: '8+', img: 'http://avatars.mds.yandex.net/get-tv-shows/69404/2a0000015264f2dd900068865ca3afe0837d/large', description: description, types: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental, TYPE_CHANNEL.HD], title: '"Сны о любви". Юбилейный концерт Аллы Пугачевой' }
].map(function (item, i) {
    item.id = i;
    return item;
});
var listTVOneDay = [
    {
        id: 1,
        img: './images/russia24.png',
        name: 'Россия 24',
        urlOnline: 'http://player.vgtrk.com/iframe/live/id/21/start_zoom/true/showZoomBtn/true/isPlay/false/',
        programs: rus24Items
    },
    {
        id: 3,
        img: './images/ch-logo-1.png',
        name: '1 Первый',
        type: [TYPE_CHANNEL.sport, TYPE_CHANNEL.documental],
        urlOnline: 'http://player.vgtrk.com/iframe/live/id/2961/showZoomBtn/false/isPlay/false/',
        programs: rus24Items
    },
    {
        id: 4,
        img: './images/planetaRTR.png',
        name: 'РТР-Планета',
        type: [TYPE_CHANNEL.documental],
        urlOnline: 'http://player.vgtrk.com/iframe/live/id/4941/showZoomBtn/false/isPlay/false/',
        programs: rus24Items
    },
    {
        id: 5,
        img: './images/moscow24.png',
        name: 'Москва 24',
        type: [TYPE_CHANNEL.sport, TYPE_CHANNEL.HD],
        urlOnline: 'http://player.vgtrk.com/iframe/live/id/1661/showZoomBtn/false/isPlay/false/',
        programs: rus24Items
    },
    {
        id: 6,
        img: './images/russiaK.png',
        name: 'Россия К',
        type: [TYPE_CHANNEL.documental, TYPE_CHANNEL.HD],
        urlOnline: 'http://player.vgtrk.com/iframe/live/id/19201/showZoomBtn/false/isPlay/false/',
        programs: rus24Items
    },
    {
        id: 7,
        img: './images/match-tv.png',
        name: 'МАТЧ ТВ',
        type: [TYPE_CHANNEL.sport, TYPE_CHANNEL.HD],
        urlOnline: 'http://rutube.ru/play/embed/8461207',
        programs: rus24Items
    }];
var listTVWeek = [
    { id: 1, channels: listTVOneDay },
    { id: 2, channels: listTVOneDay },
    { id: 3, channels: listTVOneDay },
    { id: 4, channels: listTVOneDay },
    { id: 5, channels: listTVOneDay },
    { id: 6, channels: listTVOneDay },
    { id: 7, channels: listTVOneDay }
];
/// input data end 
/// update/init grid
function updateGridItems(data, type) {
    var gridTv = document.getElementById('tv-grid');
    var docFragment = document.createDocumentFragment();
    var newElement = document.createElement('div');
    newElement.className = 'all-day';
    docFragment.appendChild(newElement);
    var gridElement = updateRenderElement(data, 0, docFragment, 'div', renderDay);
    data.forEach(function (day, kDay) {
        var dayElement = updateRenderElement(day.channels, kDay, gridElement, '.tv-channel__items', renderChannel);
        day.channels.forEach(function (channel, kChannel) {
            var filterCb = type === 0 ? getSortByTimeProgram : getSortByTypeProgram;
            updateRenderElement(filterCb(channel.programs, type), kChannel, dayElement, '.channel-program__items', renderProgram);
        });
    });
    gridTv.appendChild(docFragment);
}
/// create popup
var popupElement;
function mouseEnter(e) {
    if (popupElement) {
        if (!e.target.closest('.tv-popup')) {
            popupElement.remove();
        }
        else {
            return;
        }
    }
    var dayId = parseInt(this.closest('.tv-day').dataset.dayid);
    var channelId = parseInt(this.closest('.tv-channel__item').dataset.channelid);
    var programId = parseInt(this.closest('.tv-program__item').dataset.programid);
    var day = listTVWeek.find(function (item) { return item.id === dayId; });
    var channel = day.channels.find(function (item) { return item.id === channelId; });
    var program = channel.programs.find(function (item) { return item.id === programId; });
    popupElement = document.createElement('div');
    popupElement.id = 'popup';
    popupElement.className = 'popup';
    popupElement.innerHTML = renderPopup(channel);
    var programElement = popupElement.querySelector('.tv-popup-program');
    programElement.innerHTML = renderPopupProgram(program);
    this.appendChild(popupElement);
}
// sort start
function getSortByTimeProgram(programs) {
    var date = new Date(), nowHours = date.getHours(), countProgram = 4, resultProgram = [], oldProgram = programs[0];
    programs.every(function (program) {
        var programHours = parseInt(program.time.slice(0, 2));
        if (nowHours < programHours) {
            if (resultProgram.length === 0) {
                oldProgram.isNow = true;
                resultProgram.push(oldProgram);
            }
            resultProgram.push(program);
            return (resultProgram.length === countProgram) ? false : true;
        }
        else {
            oldProgram = program;
            return true;
        }
    });
    return resultProgram;
}
function getSortByTypeProgram(programms, type) {
    var newProgramms = [];
    programms.forEach(function (program) {
        var isFind = program.types.find(function (t) { return t === type; });
        if (isFind) {
            newProgramms.push(program);
        }
    });
    return newProgramms;
}
// sort end
/// events start
function dayChange(e) {
    e.preventDefault();
    var dayContainer = this.closest('.filter-day__change-btn');
    addClassActive.bind(this, '.filter-day__change-btn')();
    var id = parseInt(dayContainer.dataset.id);
    var day = listTVWeek.find(function (item) { return item.id === id; });
    var gridTv = document.getElementById('tv-grid');
    var allElem = gridTv.querySelector('.all-day');
    gridTv.removeChild(allElem);
    var selectElm = document.querySelector('.filter-type__select');
    updateGridItems([day], TYPE_CHANNEL[selectElm.value]);
    addPopup();
}
function addPopup() {
    delegate(document.querySelectorAll('.channel-program__items'), '.tv-program__item', 'mouseover', mouseEnter);
}
function filterType(type) {
    var gridTv = document.getElementById('tv-grid');
    var allElementProgramm = gridTv.querySelectorAll('.tv-day');
    var programItems = gridTv.querySelectorAll('.channel-program__items');
    [].forEach.call(programItems, function (p) {
        while (p.firstChild)
            p.removeChild(p.firstChild);
    });
    [].forEach.call(allElementProgramm, function (dayItem) {
        var dayId = parseInt(dayItem.dataset.dayid);
        var filterCb = type === 0 ? getSortByTimeProgram : getSortByTypeProgram;
        var day = listTVWeek.find(function (item) { return item.id === dayId; });
        day.channels.forEach(function (channel, kChannel) {
            updateRenderElement(filterCb(channel.programs, type), kChannel, dayItem, '.channel-program__items', renderProgram);
        });
    });
}
function mouseEnterGlobal(e) {
    if (popupElement) {
        if (!e.target.closest('.tv-popup') && !e.target.closest('.tv-program__item')) {
            popupElement.remove();
        }
        else {
            return;
        }
    }
}
function typeChange(e) {
    var type = TYPE_CHANNEL[e.value];
    if (type !== null) {
        filterType(type);
    }
}
/// events end
/// init filters
function initFilter() {
    var itemsHtml = '';
    for (var key in TYPE_CHANNEL) {
        if (TYPE_CHANNEL.hasOwnProperty(key)) {
            itemsHtml += renderOptionFilter(key, getTypeName(TYPE_CHANNEL[key]));
        }
    }
    [].forEach.call(document.querySelectorAll('.filter-type__select'), function (container) {
        container.innerHTML = itemsHtml;
    });
}
function initFilterDay() {
    var itemsHtml = '';
    listTVWeek.forEach(function (day) {
        itemsHtml += renderButtonFilter(day.id);
    });
    [].forEach.call(document.querySelectorAll('.filter-day'), function (container) {
        container.innerHTML = itemsHtml;
    });
}
/// function helper start 
function addClassActive(selector) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
        elements[i].classList.remove('active');
    this.classList.add('active');
}
function updateRenderElement(data, keySelector, element, className, renderCb) {
    var itemsHtml = data.map(renderCb).join('');
    var eml = element.querySelectorAll(className)[keySelector];
    eml.innerHTML = itemsHtml;
    return eml;
}
function delegate(containers, selector, event, handler) {
    [].forEach.call(containers, function (container) {
        container.addEventListener(event, function (e) {
            if (e.target.closest(selector)) {
                handler.apply(e.target, arguments);
            }
        });
    });
}
/// function helper end
/// view help start
function getTypeName(type) {
    var name = '';
    switch (type) {
        case TYPE_CHANNEL.default:
            name = 'Не выбрано';
            break;
        case TYPE_CHANNEL.HD:
            name = 'HD';
            break;
        case TYPE_CHANNEL.documental:
            name = 'Документальный';
            break;
        case TYPE_CHANNEL.mult:
            name = 'Мультфильм';
            break;
        case TYPE_CHANNEL.music:
            name = 'Музыка';
            break;
        case TYPE_CHANNEL.series:
            name = 'Сериал';
            break;
        case TYPE_CHANNEL.sport:
            name = 'Спорт';
            break;
    }
    return name;
}
function getDayWeekName(type) {
    var result = {
        name: '',
        fullName: ''
    };
    switch (type) {
        case 1:
            result.name = 'Пн';
            result.fullName = 'Понедельник';
            break;
        case 2:
            result.name = 'Вт';
            result.fullName = 'Вторник';
            break;
        case 3:
            result.name = 'Ср';
            result.fullName = 'Среда';
            break;
        case 4:
            result.name = 'Чт';
            result.fullName = 'Четверг';
            break;
        case 5:
            result.name = 'Пт';
            result.fullName = 'Пятница';
            break;
        case 6:
            result.name = 'Сб';
            result.fullName = 'Суббота';
            break;
        case 7:
            result.name = 'Вс';
            result.fullName = 'Воскресенье';
            break;
    }
    return result;
}
function getTypeProgram(types) {
    var itemsHtml = types.map(function (type) {
        var resultHtml = '';
        resultHtml = renderType(getTypeName(type));
        return resultHtml;
    }).join('');
    return itemsHtml;
}
/// view help end
/// render html start
function renderType(name) {
    return "<span class=\"tag-type\">" + name + "</span>";
}
function renderDay(item, key) {
    return "\n        <div class=\"tv-day\"\n            data-dayid='" + JSON.stringify(item.id) + "'>\n            <h2 class =\"tv-channel__header\">" + getDayWeekName(item.id).fullName + "</h2>\n            <div class=\"tv-channel__items\"></div>\n        </div>\n    ";
}
function renderChannel(item) {
    return "\n        <div class=\"tv-channel__item\"\n            data-channelid='" + JSON.stringify(item.id) + "'>\n            <div class=\"tv-channel-item\">\n                <div class=\"tv-channel-item__header\">\n                    <div class=\"tv-channel__left tv-channel-item__logo\">\n                        <img src=\"" + item.img + "\">\n                    </div>\n                    <div class=\"tv-channel__right tv-channel-item__name\">\n                        <span>" + item.name + "</span>\n                    </div>\n                </div>\n                <div class =\"tv-channel-item__body channel-program__items\"></div>\n            </div>\n        </div>\n    ";
}
function renderProgram(item) {
    return "\n        <div class=\"tv-program__item\"\n            data-programid='" + JSON.stringify(item.id) + "'>\n            <span class=\"tv-channel__left tv-program__time\">" + item.time + "</span>\n            <span class=\"tv-channel__right tv-program__title\">" + item.title + "</span>\n            " + (item.isNow ? '<span class ="tv-program__now">(транслируется)</span>' : '') + "\n        </div>\n    ";
}
function renderPopup(item) {
    return "\n        <div class =\"tv-popup\">\n            <div class =\"tv-popup-channel-item\">\n                <div class =\"tv-popup-channel-item__header\">\n                    <iframe src=\"" + item.urlOnline + "\"\n                                    scrolling=\"No\"\n                                    border=\"0\"\n                                    frameborder=\"0\"\n                                    mozallowfullscreen=\"\"\n                                    webkitallowfullscreen=\"\"\n                                    allowfullscreen=\"\"></iframe>\n                </div>\n                <div class =\"tv-popup-program\"></div>\n            </div>\n        </div>\n    ";
}
function renderPopupProgram(item) {
    return "\n         <div class =\"tv-popup-program__item\">\n            <div class =\"tv-popup-program__header-img\">\n            </div>\n            <div class =\"tv-popup-program__header-text\">\n                <span class =\"tv-popup-program__time\">" + item.time + "</span>\n                <span class =\"tv-popup-program-body__category\">" + item.category + "</span>\n\n                <span class =\"tv-popup-program__now\">" + (item.isNow
        ? '<span class ="tv-program__now">(транслируется)</span>'
        : '') + "</span>\n                <h4 class =\"tv-popup-program__title\">" + item.title + "</h4>\n            </div>\n            <div class =\"tv-popup-program__body\">\n                <div class =\"tv-popup-program-body__description\">" + item.description + "</div>\n            </div>\n            <div class =\"tv-popup-program__footer\">\n                <span>" + getTypeProgram(item.types) + "</span>\n            </div>\n        </div>\n    ";
}
function renderOptionFilter(item, name) {
    return "<option class=\"filter-type__option\" value='" + item + "'>" + name + "</option>";
}
function renderButtonFilter(key) {
    return "<button class='filter-day__change-btn btn' title='" + getDayWeekName(key).fullName + "'  data-id=" + key + ">" + getDayWeekName(key).name + "</button>";
}
/// render html end
/// init app
document.addEventListener('DOMContentLoaded', function () {
    updateGridItems(listTVWeek, 0);
    addPopup();
    initFilter();
    initFilterDay();
    delegate(document.querySelectorAll('#tv-grid'), '.tv-day', 'mouseover', mouseEnterGlobal);
    delegate(document.querySelectorAll('.filter-day'), '.filter-day__change-btn', 'click', dayChange);
});
(function (e) {
    e.closest = e.closest || function (css) {
        var node = this;
        while (node) {
            if (node.matches(css))
                return node;
            else
                node = node.parentElement;
        }
        return null;
    };
})(Element.prototype);
(function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        var element = this;
        while (element) {
            if (element.matches(selector)) {
                break;
            }
            element = element.parentElement;
        }
        return element;
    };
}(Element.prototype));
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}