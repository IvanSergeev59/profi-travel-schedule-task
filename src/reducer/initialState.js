import photo1 from "../images/photo1.png"
import photo2 from "../images/photo2.png"
import photo3 from "../images/photo3.png"
import photo4 from "../images/photo4.png"
import photo5 from "../images/photo5.png"

const buttonList = { text: 'Добавить', style: '', added: false }
const tableBlocks = [
    {
        date: '23 сентября, ПН',
        time1: ['9:00','МСК', 'gray-text'],
        time2: ['10:00','МСК', ''],
        office1: '',
        office2: 'Офис по туризму Дубая',
        p1: '',
        p2: 'Департамент туризма Дубая расскажет, как эмират обеспечивает безопасность жителей и гостей.',
        button1: 'hidden',
        button2: '',
        login1: 'hidden',
        login2: 'hidden',
        yellow: false,
        buttonId1: 1,
        buttonId2: 2,
        buttonAdded1: false,
        buttonAdded2: false,
        buttonImage1: '',
        buttonImage2: '',
        buttonText1: 'Добавить<br> в календарь',
        buttonText2: 'Добавить<br> в календарь',
        id: 1
    },
    {
        date: '13 октября, ВТ',
        time1: ['9:00','МСК', ''],
        time2: ['9:00','МСК', ''],
        office1: 'Офис по туризму Дубая',
        office2: 'Офис по туризму Дубая',
        p1: 'FIT: все турагенты делают это. Как быстро и безопасно удовлетворять сложные запросы туристов?Как быстро и безопасно удовлетворять сложные запросы туристов?',
        p2: 'Департамент туризма Дубая расскажет, как эмират обеспечивает безопасность жителей и гостей.',
        button1: '',
        button2: '',
        login1: 'hidden',
        login2: 'hidden',
        buttonAdded1: false,
        buttonAdded2: false,
        buttonText1: 'Добавить<br> в календарь',
        buttonText2: 'Добавить<br> в календарь',
        buttonImage1: '',
        buttonImage2: '',
        yellow: false,
        buttonId1: 3,
        buttonId2: 4,
        id: 2
    },
    {
        date: '14 сентября, ПН',
        time1: ['9:00','МСК', 'gray-text'],
        time2: ['10:00','МСК', ''],
        office1: '',
        office2: 'Офис по туризму Дубая',
        p1: '',
        p2: 'Barceló в ОАЭ — все новости за час: готовимся к зимнему сезону, открытие нового отеля.',
        button1: 'hidden',
        button2: '',
        login1: 'hidden',
        login2: 'hidden', 
        buttonAdded1: false,
        buttonAdded2: false,
        buttonText1: 'Добавить<br> в календарь',
        buttonText2: 'Добавить<br> в календарь',
        buttonImage1: '',
        buttonImage2: '',
        yellow: false,
        buttonId1: 5,
        buttonId2: 6,
        id: 3
    },
    {
        date: '15 октября, ЧТ',
        time1: ['День нетворкинга', '', ''],
        time2: ['','', ''],
        office1: '',
        office2: '',
        itemButtonAdded1: false,
        itemButtonAdded2: false,
        p1: 'В этот день открыта возможность проведения встреч в системе нетворкинга. Выберите партнеров в турбизнесе и начните общение с ними!',
        p2: '',
        button1: 'hidden',
        button2: 'hidden',
        login1: '',
        login2: 'hidden',
        yellow: "block__top_yellow",
        buttonText1: 'Добавить<br> в календарь',
        buttonText2: 'Добавить<br> в календарь',
        buttonImage1: '',
        buttonImage2: '',
        buttonId1: 7,
        buttonId2: 8,
        id: 4
    },
    {
        date: '16 октября, ПТ',
        time1: ['9:00','МСК', ''],
        time2: ['10:00','МСК', ''],
        office1: 'Офис по туризму Дубая',
        office2: '',
        p1: 'Barceló в ОАЭ — все новости за час: готовимся к зимнему сезону, открытие нового отеля.',
        p2: '',
        button1: '',
        button2: 'hidden',
        login1: 'hidden',
        login2: 'hidden', 
        buttonAdded1: false,
        buttonAdded2: false,
        buttonText1: 'Добавить<br> в календарь',
        buttonText2: 'Добавить<br> в календарь',
        buttonImage1: '',
        buttonImage2: '',
        buttonId1: 9,
        buttonId2: 10,
        yellow: true,
        id: 5
    }
]
const list = [
    {
        h3: '12 октября | Вторник',
        time: '14:00',
        middleBlockP1: 'Круглый стол с хэдофисами НТО: новые турпродукты и триггеры для продвижения на туристов из России и СНГ',
        middleBlockP2: 'Официальное открытие «OTM: Зима 20/21»: онлайн-сессия с участием представителей туристических офисов Греции, Польши, Венгрии, Беларуси и Риги.',
        membersCount: 615,
        members: 'уже записалось',
        hr: 'Национальная организация туризма Кореи',
        id: 1,
        slider: [
            {
                h4: 'Алексей Венгин',
                p: 'Profi.Travel',
                id: 1,
                photo: photo1
            },
            {
                h4: 'Магдалена Круч',
                p: 'Польская туристическая организации в Москве',
                id: 2,
                photo: photo2
            },
            {
                h4: 'Сергей Молдаван',
                p: 'LIVE RĪGA',
                id: 3,
                photo: photo3
            },
            {
                h4: 'Ян Кац',
                p: 'Венгерская национальная управления по туризму',
                id: 4,
                photo: photo4
            },
            {
                h4: 'Георгий Мавроматис',
                p: 'Греческая Национальной Туристической Организации',
                id: 5,
                photo: photo5
            },
            {
                h4: 'Алексей Венгин',
                p: 'Profi.Travel',
                id: 6,
                photo: photo1
            },
            {
                h4: 'Магдалена Круч',
                p: 'Польская туристическая организации в Москве',
                id: 7,
                photo: photo2
            },
            {
                h4: 'Алексей Венгин',
                p: 'Profi.Travel',
                id: 8,
                photo: photo1
            },
            {
                h4: 'Магдалена Круч',
                p: 'Польская туристическая организации в Москве',
                id: 9,
                photo: photo2
            },
            {
                h4: 'Сергей Молдаван',
                p: 'LIVE RĪGA',
                id: 10,
                photo: photo3
            },
            {
                h4: 'Ян Кац',
                p: 'Венгерская национальная управления по туризму',
                id: 11,
                photo: photo4
            },
            {
                h4: 'Георгий Мавроматис',
                p: 'Греческая Национальной Туристической Организации',
                id: 12,
                photo: photo5
            },
            {
                h4: 'Алексей Венгин',
                p: 'Profi.Travel',
                id: 13,
                photo: photo1
            },
            {
                h4: 'Магдалена Круч',
                p: 'Польская туристическая организации в Москве',
                id: 14,
                photo: photo2
            }
        ]
    }
]
export {tableBlocks, list, buttonList}