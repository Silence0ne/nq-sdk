import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    PermissionListResponseData,
    PermissionViewResponseData,
    PermissionAddRequestData,
} from "../types/permission";
import { BaseController } from "../utils/baseController";

export class ControllerPermission extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PermissionListResponseData>> {
        return await this.axiosGet(`/permission`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<PermissionViewResponseData>> {
        return await this.axiosGet(`/permission/${target}`, config);
    }

    async add(
        data: PermissionAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/permission`, data, config);
    }

    async edit(
        target: UUID,
        data: PermissionAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(
            `/permission/${target}`,
            data,
            config
        );
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/permission/${target}`, config);
    }
}
