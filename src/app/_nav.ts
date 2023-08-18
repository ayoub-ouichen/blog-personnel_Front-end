import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Voir le blog',
    url: '/lire-blog',
    icon: 'cil-external-link'
    // badge: {
    //   variant: 'info',
    //   text: 'local'
    // }
  },
  {
    title: true,
    name: 'contenu'
  },
  {
    name: 'Nouveau Poste',
    url: '/contenu/poste',
    icon: 'fa fa-plus-square'
  },
  {
    name: 'Postes',
    url: '/contenu/postes',
    icon: 'fa fa-th-list'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'outils'
  },
  {
    name: 'Statistiques',
    url: '/statistiques',
    icon: 'fa fa-bar-chart',
    children: [
      {
        name: 'Vues',
        url: '/statistiques/vues',
        icon: 'fa fa-eye'
      },
      {
        name: 'Abonnés',
        url: '/statistiques/abonnes',
        icon: 'fa fa-users'
      }
    ]
  },
  {
    name: 'boîtes de réception',
    url: '/boite_reception',
    icon: 'fa fa-inbox',
    children: [
      {
        name: 'Messages',
        url: '/boite_reception/messages',
        icon: 'fa fa-envelope'
      },
      {
        name: 'Commentaires',
        url: '/boite_reception/commentaires',
        icon: 'fa fa-commenting'
      }
    ]
  },
  {
    name: 'Paramètres',
    url: '/parametres',
    icon: 'fa fa-cogs',
    children: [
      {
        name: 'Langues',
        url: '/parametres/langues',
        icon: 'fa fa-language'
      },
      {
        name: 'Couleur',
        url: '/parametres/couleur',
        icon: 'fa fa-paint-brush'
      },
      {
        name: 'Info',
        url: '/parametres/info',
        icon: 'fa fa-info-circle'
      }
    ]
  },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
