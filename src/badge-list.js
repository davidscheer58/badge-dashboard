import { LitElement, html, css } from "lit";
import "./badge-dashboard";

export class Badges extends LitElement{

    static get tag() {
        return 'badge-list';
    }

    static get properties() {
        return {
            badges: { type: Array }
        }
    }

    constructor() {
        super();
        this.badges = [];
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../assets/badge-map.json', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            width: 400px;
            display: flex;
        }
        .item {
            display: inline-flex
        }
        `;
    }

    render() {
        return html`
        <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <badge-dashboard badgeTopTitle="${badge.badgeTopTitle}" badgePic="${badge.badgePic}" badgeTitleName="${badge.badgeTitleName}" badgeCreatorName="${badge.badgeCreatorName}"></badge-dashboard>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(Badges.tag, Badges);