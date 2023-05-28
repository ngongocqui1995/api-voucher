"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireRoles = void 0;
const common_1 = require("@nestjs/common");
const RequireRoles = (...roles) => (0, common_1.SetMetadata)("roles", roles);
exports.RequireRoles = RequireRoles;
//# sourceMappingURL=roles.decorator.js.map