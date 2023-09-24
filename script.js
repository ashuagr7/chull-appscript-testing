import { Router } from "./function/core/Router.js";
import { TemplateEngine } from "./function/utils/templateEngine.js";

import { siteNavContent } from "./form/pages/content/navigational/navbar/siteNav/siteNavContent.js";
import { navbarTemplate } from "./form/pages/templates/navigational/navbar/navbar.js";
import { landingPageHeaderContent } from "./form/pages/content/informative/header/landingpage/landingPageHeadercontent.js";
import { landingPageHeaderTemplate } from "./form/pages/templates/informative/header/landingpage/landingPageHeader.js";
import { landingPageCardsTemplate } from "./form/pages/templates/informative/cards/landingPage/landingPageCards.js";
import { landingPageCardContent } from "./form/pages/content/informative/cards/landingPage/landingPageContent.js";
import { landingPageBannerContent } from "./form/pages/content/informative/banner/landingPage/landingPageBanner.js";
import { landingPageBannerTemplate } from "./form/pages/templates/informative/banner/landingPage/landingPageBanner.js";
import { sidebarTemplate } from "./form/pages/templates/navigational/sidebar/sidebar.js";
import { siteSidebarContent } from "./form/pages/content/navigational/sidebar/siteSidebar/siteSidebar.js";
import { authFormContent } from "./form/pages/content/functional/authForms/authFormsContent.js";
import { authFormTemplates } from "./form/pages/templates/functional/authForms/authFormsTemplate.js";
import { explorerCardTemplate } from "./form/pages/templates/informative/cards/explorer/explorerCards.js";
import { listMobTemplate } from "./form/pages/templates/informative/list/explorer/mobile/listMob.js";
import { listDeskTemplate } from "./form/pages/templates/informative/list/explorer/desktop/listDesk.js";
import { appNavContent } from "./form/pages/content/navigational/navbar/appNav/appNav.js";
import { appSidebarTemplate } from "./form/pages/templates/navigational/sidebar/appSidebar.js";
import { appSidebarContent } from "./form/pages/content/navigational/sidebar/appSidebar/appSidebar.js";
import { editorNavContent } from "./form/pages/content/navigational/navbar/editorNav/editorNav.js";
import { editorNavTemplate } from "./form/pages/templates/navigational/navbar/editorNav/editorNav.js";
const landingPageNavbar = TemplateEngine.convert(navbarTemplate, siteNavContent)
const landingPageHeader = TemplateEngine.convert(landingPageHeaderTemplate, landingPageHeaderContent)
const landingPageCards = TemplateEngine.convert(landingPageCardsTemplate, landingPageCardContent)
const landingPageBanner = TemplateEngine.convert(landingPageBannerTemplate, landingPageBannerContent)
const landingPageSidebar = TemplateEngine.convert(sidebarTemplate, siteSidebarContent)
const authForms = TemplateEngine.convert(authFormTemplates, authFormContent)
const appNav = TemplateEngine.convert(navbarTemplate,appNavContent)
const appSidebar = TemplateEngine.convert(appSidebarTemplate,appSidebarContent)
const editorNavbar = TemplateEngine.convert(editorNavTemplate,editorNavContent)









const routes = [
    {
        path: '/',
        components: {
            'app': {
                name: "LandingPageApp",
                html: [`<div data-router="navbar"></div><main data-router="main"></main>`]
            },
            'navbar': {
                name: "LandingPageNav",
                html: landingPageNavbar
            },
            'main': {
                name: "LandingPageMain",
                html: [landingPageSidebar,landingPageHeader,landingPageCards,landingPageBanner]
            }
        },
        css: ['./beauty/styles/custom/landingPage.css'],
        scripts: ['./beauty/scripts/components/sidebar/sidebarUtils.js']
    },
    {
        path: '/auth',
        components: {
            'app': {
                name: "AuthAppContainer",
                html: [`</div><main data-router="main"></main>`]
            },
            'main': {
                name: "AuthApp",
                html: authForms,

            }

        },
        scripts: ['./function/customScripts/auth/auth.js', './function/utils/sendReq.js', './function/utils/Auth.js']
    },
    {
        path: "/explorer",
        components: {
            'app': {
                name: "ExplorerApp",
                html: [`<div data-router="navbar"></div><main data-router="main"></main>`]
            },
            'navbar': {
                name: "AppNav",
                html: appNav
            },
            'main': {
                name: "ExplorerMain",
                html: [appSidebar,`<div class="content" data-router="content"><h2 class="light">My Drive</h2></div>`],

            }
        },
        css: ['./beauty/styles/custom/explorer.css'],
        scripts: ['./beauty/scripts/components/sidebar/sidebarUtils.js','./function/customScripts/auth/explorer.js']
    },
    {
        path:"/editor",
        components:{
            'app': {
                name: "EditorApp",
                html: [`<div data-router="navbar"></div><main data-router="main"></main>`]
            },
            'navbar': {
                name: "EditorAppNav",
                html: editorNavbar
            },
            'main': {
                name: "EditorMain",
                html: [`<div id="sidebar" class="sidebar">
          
                <h2>Files</h2>
                <ul id="file-list">
                  <!-- Populated dynamically -->
                </ul>
              </div>
              <!-- Main Editor Window -->
              <div id="main-window">
                <div id="actionButtons"></div>
                <!-- Tab Container -->
                <div id="tabContainer"></div>
                <div id="editor">
                  <!-- Cell Container -->
                  <div id="cells">
                    <!-- Cells will be appended here dynamically -->
                  </div>
                  <!-- Add Cell Button -->
                  <button id="add-cell-btn">Add Cell</button>
                </div>
              </div>`],

            }
        },
        css:['./beauty/styles/custom/editor.css'],
        scripts:['./function/customScripts/editor/editor.js']

    }

]

const route = new Router(routes)


