/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Registra entregas',
      to: '/entregas',
      icon: 'si si-info'
    },
    {
      name: 'Registra productos finales',
      to: '/productos',
      icon: 'si si-energy'
    },
  ],
  'demo': [
    {
      name: 'Home',
      to: '#',
      icon: 'fa fa-home',
      badge: 5
    },
    {
      name: 'Manage',
      heading: true
    },
    {
      name: 'Products',
      icon: 'fa fa-briefcase',
      sub: [
        {
          name: 'HTML Templates',
          icon: 'fab fa-html5',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 320
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 18
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 32
            }
          ]
        },
        {
          name: 'WordPress Themes',
          icon: 'fab fa-wordpress',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 680
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 15
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 20
            }
          ]
        },
        {
          name: 'Web Applications',
          icon: 'fab fa-medapps',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 158
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 65
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 78
            }
          ]
        },
        {
          name: 'Video Templates',
          icon: 'fab fa-youtube',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 920
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 7
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 19
            }
          ]
        },
        {
          name: 'Add Product',
          to: '#',
          icon: 'fa fa-plus'
        }
      ]
    },
    {
      name: 'Payments',
      icon: 'fa fa-money-bill-wave',
      sub: [
        {
          name: 'Scheduled',
          to: '#',
          badge: 3,
          'badge-variant': 'success'
        },
        {
          name: 'Recurring',
          to: '#'
        },
        {
          name: 'Manage',
          to: '#'
        },
        {
          name: 'New Payment',
          to: '#',
          icon: 'fa fa-plus'
        }
      ]
    },
    {
      name: 'Services',
      icon: 'fa fa-globe-americas',
      sub: [
        {
          name: 'Hosting',
          to: '#'
        },
        {
          name: 'Web Design',
          to: '#'
        },
        {
          name: 'Web Development',
          to: '#'
        },
        {
          name: 'Graphic Design',
          to: '#'
        },
        {
          name: 'Legal',
          to: '#'
        },
        {
          name: 'Consulting',
          to: '#'
        }
      ]
    },
    {
      name: 'Personal',
      heading: true
    },
    {
      name: 'Profile',
      icon: 'far fa-user',
      sub: [
        {
          name: 'Edit',
          to: '#'
        },
        {
          name: 'Settings',
          to: '#'
        },
        {
          name: 'Log out',
          to: '#'
        }
      ]
    }
  ]
}
