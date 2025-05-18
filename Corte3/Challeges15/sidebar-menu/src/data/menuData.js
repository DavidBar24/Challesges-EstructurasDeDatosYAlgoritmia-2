import { MenuNode } from './MenuNode';

export const buildMenuTree = () => {
  const root = new MenuNode('Root', '/', null);

  const profile = new MenuNode('Profile', '/profile', 'ProfileComponent');
  const messages = new MenuNode('Messages', '/messages', 'MessagesComponent');
  
  const settings = new MenuNode('Settings', '/settings', 'SettingsComponent');
  const account = new MenuNode('Account', '/account', 'AccountComponent');
  const security = new MenuNode('Security', '/security', 'SecurityComponent');
  
  settings.addChild(account);
  settings.addChild(security);
  
  const help = new MenuNode('Help', '/help', 'HelpComponent');
  const faq = new MenuNode('FAQ', '/faq', 'FAQComponent');
  const ticket = new MenuNode('Submit Ticket', '/ticket', 'TicketComponent');
  
  help.addChild(faq);
  help.addChild(ticket);

  root.addChild(profile);
  root.addChild(messages);
  root.addChild(settings);
  root.addChild(help);

  return root;
};