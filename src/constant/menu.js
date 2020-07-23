import { faUserTag, faChartLine, faUserMd } from "@fortawesome/free-solid-svg-icons";

export const MENUITEMS = [
    {
        title: 'Dashboard', faIcon: faChartLine, type: 'link', path: '/dashboard', active: false
    },
    {
        title: 'Pacientes', faIcon: faUserTag, type: 'link', path: '/pacientes', active: false
    },
    {
        title: 'Colaboradores', faIcon: faUserMd, type: 'link', path: '/colaboradores', active: false
    }
]
