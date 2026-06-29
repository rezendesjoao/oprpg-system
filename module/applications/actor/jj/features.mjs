/**
 * jj/features.mjs
 * Cabeçalhos de seção colapsáveis nas abas de Características, Inventário e Técnicas.
 */

export function setupFeatureSectionCollapse(element) {
  ["features", "inventory", "spells"].forEach(tabId => {
    const tab = element.querySelector(`[data-tab="${tabId}"]`);
    if ( !tab ) return;
    tab.querySelectorAll(".items-section > header, .items-section > .items-header").forEach(header => {
      if ( header.dataset.jjCollapseBound ) return;
      header.dataset.jjCollapseBound = "1";
      header.style.cursor = "pointer";
      header.style.userSelect = "none";
      if ( !header.querySelector(".jj-collapse-icon") ) {
        const icon = document.createElement("i");
        icon.className = "fas fa-chevron-down jj-collapse-icon";
        icon.style.cssText = "margin-left: auto; font-size: 10px; opacity: 0.4; transition: transform 200ms ease; flex-shrink: 0;";
        header.appendChild(icon);
      }
      header.addEventListener("click", e => {
        if ( e.target.closest("button, a, input, [data-action]") ) return;
        const section = header.closest(".items-section");
        if ( !section ) return;
        const isCollapsed = section.classList.toggle("jj-collapsed");
        const icon = header.querySelector(".jj-collapse-icon");
        section.querySelectorAll(":scope > *:not(header):not(.items-header)").forEach(el => {
          el.style.display = isCollapsed ? "none" : "";
        });
        if ( icon ) icon.style.transform = isCollapsed ? "rotate(-90deg)" : "";
      });
    });
  });
}


