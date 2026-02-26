//import { browser } from '@wdio/globals'
// import { browser, ChainablePromiseElement } from '@wdio/globals'
import { browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
//return browser.url(`https://the-internet.herokuapp.com/${path}`)
export default class BasePage {

  /* ---------------- Browser / Navigation ---------------- */

  async open(path: string) {
    await browser.url(path);
  }

  async refreshPage() {
    await browser.refresh();
  }

  async setText(element: WebdriverIO.Element, value: string) {
        await element.waitForDisplayed();
        await element.clearValue();   // optional but safer
        await element.setValue(value);
    }

  async getTitle(): Promise<string> {
    return browser.getTitle();
  }

  async getCurrentUrl(): Promise<string> {
    return browser.getUrl();
  }

  async waitForPageLoad(timeout = 10000) {
    await browser.waitUntil(
      async () => (await browser.execute(() => document.readyState)) === 'complete',
      { timeout, timeoutMsg: 'Page not loaded' }
    );
  }

  /* ---------------- Element Waits ---------------- */

  async waitForElementDisplayed(
    element: WebdriverIO.Element,
    timeout = 10000
  ) {
    await element.waitForDisplayed({ timeout });
  }

  async waitForElementClickable(
    element: WebdriverIO.Element,
    timeout = 10000
  ) {
    await element.waitForClickable({ timeout });
  }

  async waitForElementExist(
    element: WebdriverIO.Element,
    timeout = 10000
  ) {
    await element.waitForExist({ timeout });
  }

  async waitForElementHidden(
    element: WebdriverIO.Element,
    timeout = 10000
  ) {
    await element.waitForDisplayed({ reverse: true, timeout });
  }

  /* ---------------- Element Actions ---------------- */

  async click(element: WebdriverIO.Element) {
    await this.waitForElementClickable(element);
    await element.click();
  }

  async doubleClick(element: WebdriverIO.Element) {
    await this.waitForElementDisplayed(element);
    await element.doubleClick();
  }

  async setValue(
    element: WebdriverIO.Element,
    value: string
  ) {
    await this.waitForElementDisplayed(element);
    await element.setValue(value);
  }

  async addValue(
    element: WebdriverIO.Element,
    value: string
  ) {
    await this.waitForElementDisplayed(element);
    await element.addValue(value);
  }

  async clearValue(element: WebdriverIO.Element) {
    await this.waitForElementDisplayed(element);
    await element.clearValue();
  }

  /* ---------------- Element Getters ---------------- */

  async getText(element: WebdriverIO.Element): Promise<string> {
    await this.waitForElementDisplayed(element);
    return element.getText();
  }

  async getValue(element: WebdriverIO.Element): Promise<string> {
  await this.waitForElementDisplayed(element);
  const value = await element.getValue();
  return value as string;
}

  async getAttribute(
    element: WebdriverIO.Element,
    attribute: string
  ): Promise<string | null> {
    await this.waitForElementDisplayed(element);
    return element.getAttribute(attribute);
  }

  async isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
    return element.isDisplayed();
  }

  async isEnabled(element: WebdriverIO.Element): Promise<boolean> {
    return element.isEnabled();
  }

  async isSelected(element: WebdriverIO.Element): Promise<boolean> {
    return element.isSelected();
  }

  /* ---------------- Mouse & Keyboard ---------------- */

  async hover(element: WebdriverIO.Element) {
    await this.waitForElementDisplayed(element);
    await element.moveTo();
  }

  async pressKey(key: string) {
    await browser.keys(key);
  }

  /* ---------------- Scrolling ---------------- */

  async scrollIntoView(element: WebdriverIO.Element) {
    await element.scrollIntoView();
  }

  async scrollToTop() {
    await browser.execute(() => window.scrollTo(0, 0));
  }

  async scrollToBottom() {
    await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
  }

  /* ---------------- Alerts ---------------- */

  async acceptAlert() {
    await browser.acceptAlert();
  }

  async dismissAlert() {
    await browser.dismissAlert();
  }

  async getAlertText(): Promise<string> {
    return browser.getAlertText();
  }

  /* ---------------- Frames ---------------- */

  async switchToFrame(frame: WebdriverIO.Element | number) {
    await browser.switchToFrame(frame);
  }

  async switchToParentFrame() {
    await browser.switchToParentFrame();
  }

  /* ---------------- Windows / Tabs ---------------- */

  async switchToWindowByTitle(title: string) {
    await browser.switchWindow(title);
  }

  async closeCurrentWindow() {
    await browser.closeWindow();
  }

  /* ---------------- Screenshots ---------------- */

  async takeScreenshot(fileName: string) {
    await browser.saveScreenshot(`./screenshots/${fileName}.png`);
  }
}



