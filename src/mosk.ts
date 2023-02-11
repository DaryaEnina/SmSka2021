import {Book, IReview, Link} from './interfaces/interfaces';

export const reviews: IReview[] = [
    {
        id: '63ca7627537f7969926ff4c',
        image: '../../assets/img/imageBook.jpg',
        name: 'Иван Иванов',
        date: '2019-01-05T05:28:02',
        rating: 4,
        text:'',
    },
    {
        id: '63ca76277659537f7969926ff4c',
        image: '../../assets/img/imageBook.jpg',
        name: 'Николай Качков',
        date: '2018-06-20T05:28:02',
        rating: 4,
        text:'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций— глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
    },
    {
        id: '63ca7627537f7966539926ff4c',
        image: '../../assets/img/imageBook.jpg',
        name: 'Екатерина Беляева',
        date: '2018-02-18T05:28:02',
        rating: 4,
        text:'',
    },
]

export const ProjectData: Book[] = [
    {
        id: '63ca7627f796992896ff4c',
        image: [],
        category: 'business',
        author: 'Адитья Бхаргава',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
        rating: 0,
        year: 2019,
        stock: true,
        datePublic: '2020-09-09T05:28:02'
    },
    {
        id: '63ca7627f79699276896ff4c',
        image: ['../../assets/img/imageBook.jpg'],
        category: 'business',
        author: 'Адитья Бхаргава',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие',
        rating: 0,
        year: 2020,
        stock: true,
        datePublic: '2021-06-09T05:28:02'
    },
    {
        id: '63ca7627f7969926ff4c',
        image: ['../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg'],
        category: 'business',
        author: 'Catherine Case',
        title: 'Covert Street, Bonanza,  Washington Covert Street Washington Covert Street, Bonanza,',
        rating: 0,
        year: 1972,
        stock: false,
        datePublic: '2024-11-09T05:28:02'
    },
    {
        id: '63ca7627549c20ea764acb8fc',
        image: [''],
        category: 'business',
        author: 'Lenore Delaney',
        title: 'Terrace, Winfred, Louisiana',
        rating: 2,
        year: 1998,
        stock: true,
        datePublic: '2024-10-02T10:46:09'
    },
    {
        id: '63ca762761ae795438881f1acb53',
        image: ['../../assets/img/imageBook.jpg'],
        category: 'business',
        author: 'Katie Terry',
        title: 'Fair Street, Stewart, Nevada, Fair Street, Stewart, Nevada, Fair Street, Stewart, Nevada',
        rating: 1,
        year: 1975,
        stock: true,
        datePublic: '2023-10-24T02:17:44'
    },
    {
        id: '63ca7627eab55a42591',
        image: ['../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg'],
        category: 'business',
        author: 'Tucker Langley',
        title: 'Riverdale Avenue,  Michigan',
        rating: 1,
        year: 1929,
        stock: false,
        datePublic: '2024-04-10T06:34:58'
    },
    {
        id: '63ca7627db47f24a9cf5',
        image: ['../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg', '../../assets/img/imageBook.jpg'],
        category: 'business',
        author: 'Watkins Watts',
        title: 'Lafayette Walk, Felt, Pennsylvania',
        rating: 2,
        year: 1983,
        stock: false,
        datePublic: '2023-03-20T03:19:53'
    },

]

export const links: Link[] = [
    {name: 'Все книги', count: '', paths: '/books/all'},
    {name: 'Бизнес-книги', count: '14', paths:  '/books/business'},
    {name: 'Детективы', count: '8', paths: '/books/detective'},
    {name: 'Детские книги', count: '14', paths: '/books/children'},
    {name: 'Зарубежная литература', count:'2' , paths:'/books/country' },
    {name: 'История', count:'5' , paths:'/books/history' },
    {name: 'Классическая литература', count:'12' , paths:'/books/classic' },
    {name: 'Книги по психологии', count: '11', paths:'/books/psychology' },
    {name: 'Компьютерная литература', count:'54' , paths: '/books/computer'},
    {name: 'Культура и искусство', count:'5' , paths: '/books/art'},
    {name: 'Наука и образование', count: '2', paths:'/books/education' },
    {name: 'Публицистическая литература', count: '0', paths:'/books/public' },
    {name: 'Справочники', count: '10', paths:'/books/info' },
    {name: 'Фантастика', count: '12', paths:'/books/fantasy' },
    {name: 'Юмористическая литература', count: '8', paths:'/books/humor' },
]
