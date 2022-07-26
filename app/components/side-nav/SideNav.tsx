import MenuItems from './MenuItems'
import Header from '~/components/SideNavHeader'
import Footer from '~/components/SideNavFooter'

let sideNavGuide = [
  {
    navGuide: 'Main Menu',
    subItem: [
      {
        iconClass: 'mdi:view-dashboard',
        itemName: 'Dashboard',
        itemRoute: 'dashboard',
      },
      {
        iconClass: 'mdi:chart-box-outline',
        itemName: 'Results',
        itemRoute: 'results',
      },
    ],
  },
  {
    navGuide: 'Assessments',
    subItem: [
      {
        iconClass: 'carbon:result',
        itemName: 'Tests',
        itemRoute: 'tests',
      },
      {
        iconClass: 'ci:list-checklist-alt',
        itemName: 'Sections',
        itemRoute: 'sections',
      },
    ],
  },
  {
    navGuide: 'General',
    subItem: [
      {
        iconClass: 'mdi:account-group',
        itemName: 'Members',
        itemRoute: 'members',
      },
      {
        iconClass: 'mdi:cog',
        itemName: 'Settings',
        itemRoute: 'settings',
      },
    ],
  },
]

function SideNav() {
  return (
    <div className="flex h-full flex-col justify-between overflow-auto p-5">
      <div>
        <div className="mb-14 px-1">
          <Header />
        </div>
        <div className="flex flex-col gap-8">
          {sideNavGuide.map((guide, index) => {
            return (
              <div className="10px flex flex-col gap-1" key={index}>
                <p className="non-italic  px-2 pb-2 text-left text-xs font-semibold leading-4 text-gray-400">
                  {guide.navGuide}
                </p>
                {guide.subItem.map((item, index) => {
                  return (
                    <MenuItems
                      key={index}
                      iconClass={item.iconClass}
                      itemName={item.itemName}
                      itemRoute={item.itemRoute}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="justify-end">
        <Footer />
      </div>
    </div>
  )
}

export default SideNav