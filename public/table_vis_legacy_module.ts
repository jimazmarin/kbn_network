/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { IModule } from 'angular';

// @ts-ignore
import { KbnNetworkVisController } from './kbn-network-vis-controller.js';
// @ts-ignore
import { KbnNetworkAggTable } from './agg_table/agg_table';
// @ts-ignore
import { KbnNetworkAggTableGroup } from './agg_table/agg_table_group';
// @ts-ignore
import { KbnNetworkRows } from './paginated_table/rows';
// @ts-ignore
import { NetworkPaginatedTable } from './paginated_table/paginated_table';

/** @internal */
export const initTableVisLegacyModule = (angularIns: IModule): void => {
  angularIns
    .controller('KbnNetworkVisController', KbnNetworkVisController)
    .directive('kbnNetworkAggTable', KbnNetworkAggTable)
    .directive('kbnNetworkAggTableGroup', KbnNetworkAggTableGroup)
    .directive('kbnNetworkRows', KbnNetworkRows)
    .directive('networkPaginatedTable', NetworkPaginatedTable);
};
