export const formattedDate = (date: string): string => {
    let mount: string = (new Date(date).getMonth() + 1).toString();
    let day: string = new Date(date).getDate().toString();

    if (day.length === 1) day = `0${day}`;

    if (mount.length === 1) mount = `0${mount}`;

    return `${day}.${mount}`
}

export const formattedDateRu = (date: string): string => {
    const mountArr: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const mount: number = new Date(date).getMonth();
    const day: string = new Date(date).getDate().toString();
    const year: string = new Date(date).getFullYear().toString();

    return `${day} ${mountArr[mount]} ${year}`
}
