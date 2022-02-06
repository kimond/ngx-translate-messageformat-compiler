import { InjectionToken } from "@angular/core";
import { CustomFormatter } from "@messageformat/core";

export const MESSAGE_FORMAT_CONFIG = new InjectionToken<MessageFormatConfig>(
  "MESSAGE_FORMAT_CONFIG"
);

export interface MessageFormatConfig {
  biDiSupport?: boolean;
  formatters?: {
    [key: string]: CustomFormatter;
  };
  locales?: string | string[];
  strictNumberSign?: boolean;
  disablePluralKeyChecks?: boolean;
}

export const defaultConfig: MessageFormatConfig = {
  biDiSupport: false,
  formatters: undefined,
  locales: undefined,
  strictNumberSign: false,
  disablePluralKeyChecks: false,
};
