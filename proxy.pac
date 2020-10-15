/*
 * Help Desk proxy auto-configuration file
 *
 * $id: proxy.pac,v 1.0.0 2009/01/09 08:14:56 mteixeir Exp $
 * Copyright (C) 2009
 *
 * Last Modified: 2009/09/29 09:10:12
 *
 * This is a Firefox proxy auto configuration file.
 * Help Desk uses it to configure associtates's browsers to use specific
 * proxies based on the tools they need.
 *
 * Stored: hdn.corp.redhat.com:/data/web/proxyAutoConfiguration/proxy.pac
 * Served: http://hdn.corp.redhat.com/proxy.pac
 * References:
 *  http://en.wikipedia.org/wiki/Proxy_auto-config
 *  http://en.wikipedia.org/wiki/Web_Proxy_Autodiscovery_Protocol
 *  http://www.findproxyforurl.com/
 *
 * Author: Mauricio Teixeira <mteixeira@redhat.com>
 *
 * 2017-09-11 - added "*revstreamcloud.com/*" by Oliver Haessler <oliver@redhat.com> (TASK0240046)
 * 2020-01-07 - added "access.stage.redhat.com" by Oliver Haessler <oliver@redhat.com> (INC1123119)
 *
*/

function FindProxyForURL(url, host) {
  if (shExpMatch(url,"*.hua.hrsmart.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*internal-redhat.icims.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.adaptiveplanning.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.fxall.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  //https://home.corp.redhat.com/node/41725
  if (shExpMatch(url,"*lwn.net/*")) {
    return "PROXY squid.rdu.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*.ocr-inc.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*ci.dev.openshift.redhat.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (shExpMatch(url,"*revstreamcloud.com/*")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  // added on request of James Russell <jrussell@redhat.com> (TASK0440176)
  if (dnsDomainIs(host, "stg.jira.coreos.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "dev.jira.coreos.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "attachments.access.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "attachments.access.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "access.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "catalog.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "dev.redhatstatic.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "preprod.redhatstatic.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "static.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "static.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "summit.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "summit.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "www.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "www.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhtapps.dev.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhtapps.preprod.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "rhtapps.qa.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  if (dnsDomainIs(host, "cloud.stage.redhat.com")) {
    return "PROXY squid.corp.redhat.com:3128; DIRECT";
  }
  return "DIRECT";
}