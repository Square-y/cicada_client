<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import axios from 'axios'
</script>

<template>
  <WelcomeItem v-for="(item,index) in articleList" :key="index" class="Body_list" :ref="`Body_list${index}`">
    <template  #heading >
      {{item.title}}
    </template>
    <div class="content">
      {{item.content}}
    </div>
    </WelcomeItem>
</template>


<style>
.content {
  margin-bottom: 0.5rem;
}
</style>

<script lang="ts">
export default {
    name: 'TheWelcome',
    components:{
      WelcomeItem
    },
    data() {
      return {
        articleList:[{ id:1,
                      "title":"冰与火之歌",
                      "content":"由于 IT 基础设施的爆炸性增长和物联网（IoT）的出现，数据的规模正在迅速增长。一个现代的数据中心可能需要收集多达 1 亿个指标——从网络设备和服务器到虚拟机、容器和微服务的一切都在不断地发送时间序列数据。再比如，分布式电网中的每个智能电表每分钟至少产生一个数据点，而中国的智能电表，至少有十亿个。任何一台计算机都不可能处理这么多的数据，所以任何旨在处理时间序列数据的系统必须是可扩展的。 然而，许多市场领先的时序数据库并没有提供可扩展的解决方案。就拿 Prometheus 来说，它可以算是用于 Kubernetes 环境的时序数据库的一个事实标准，但它并没有提供分布式的设计，而必须依靠 Cortex、Thanos 或其他第三方工具来实现可扩展性。InfluxDB 有集群功能，但是只向企业客户提供，没有选择开源。为了解决这个问题，很多开发者的选择是，在应用程序和时序数据库服务器（如 InfluxDB 或 Prometheus）之间部署一个代理服务器，来建立自己的可扩展的解决方案。然后根据时序 ID 的哈希值，将收集到的时序数据在多个时序数据库服务器之间分配。从数据写入角度看，这确实解决了可扩展性的问题。但对于查询，代理服务器必须合并来自每个底层节点的查询结果，而这是一个很大的技术挑战。对于一些查询，比如计算标准差，还不能只是合并结果，而是必须从每个节点检索原始数据。这意味着需要重写整个查询引擎，需要的工作量相当之大。 进一步，仔细研究一下 InfluxDB 和 TimeScaleDB 的设计，就会发现，它们的可扩展性实际上是相当有限的。它们将元数据存储在一个中心位置，每个时间序列总是会关联一组标签或标识。这意味着，如果你有 10 亿个时间序列，系统就需要存储 10 亿组标签。看出问题了吗？当你要聚合多个时间序列时，系统需要首先确定哪些时间序列符合标签过滤条件，而在一个很大的数据集中，这会导致很大的延迟。这就是所谓的时间序列数据库的高基数（high-cardinality）问题。那么应该如何解决这个问题呢？答案就是元数据处理的分布式设计。元数据不能存储在一个中心位置，否则它很快就会成为一个瓶颈。一个简单的解决方案是，使用分布式关系数据库来处理元数据，但是这会增加系统的复杂度，使得系统更难维护，成本也更高了。TDengine 1.x 的设计就是将所有元数据存储在管理节点（mnode）上，所以它也有 high-cardinality 的问题。在 TDengine 2.x 中，我们做了一些改进，就是将标签值存储在每个虚拟节点（vnode）而不是中央管理节点上, 聚合查询速度有保证，但系统启动时间在时间线超过千万后不可忍受，没有完全解决这个业内的难题。",
                      highlight:'',
                      author:'',
                      "avatar":"", 
                      create_time:'',
                      "_image":"",
                      like:0,
                      liked:1},

                      { id:1,
                      "title":"冰与火之歌",
                      "content":"由于 IT 基础设施的爆炸性增长和物联网（IoT）的出现，数据的规模正在迅速增长。一个现代的数据中心可能需要收集多达 1 亿个指标——从网络设备和服务器到虚拟机、容器和微服务的一切都在不断地发送时间序列数据。再比如，分布式电网中的每个智能电表每分钟至少产生一个数据点，而中国的智能电表，至少有十亿个。任何一台计算机都不可能处理这么多的数据，所以任何旨在处理时间序列数据的系统必须是可扩展的。 然而，许多市场领先的时序数据库并没有提供可扩展的解决方案。就拿 Prometheus 来说，它可以算是用于 Kubernetes 环境的时序数据库的一个事实标准，但它并没有提供分布式的设计，而必须依靠 Cortex、Thanos 或其他第三方工具来实现可扩展性。InfluxDB 有集群功能，但是只向企业客户提供，没有选择开源。为了解决这个问题，很多开发者的选择是，在应用程序和时序数据库服务器（如 InfluxDB 或 Prometheus）之间部署一个代理服务器，来建立自己的可扩展的解决方案。然后根据时序 ID 的哈希值，将收集到的时序数据在多个时序数据库服务器之间分配。从数据写入角度看，这确实解决了可扩展性的问题。但对于查询，代理服务器必须合并来自每个底层节点的查询结果，而这是一个很大的技术挑战。对于一些查询，比如计算标准差，还不能只是合并结果，而是必须从每个节点检索原始数据。这意味着需要重写整个查询引擎，需要的工作量相当之大。 进一步，仔细研究一下 InfluxDB 和 TimeScaleDB 的设计，就会发现，它们的可扩展性实际上是相当有限的。它们将元数据存储在一个中心位置，每个时间序列总是会关联一组标签或标识。这意味着，如果你有 10 亿个时间序列，系统就需要存储 10 亿组标签。看出问题了吗？当你要聚合多个时间序列时，系统需要首先确定哪些时间序列符合标签过滤条件，而在一个很大的数据集中，这会导致很大的延迟。这就是所谓的时间序列数据库的高基数（high-cardinality）问题。那么应该如何解决这个问题呢？答案就是元数据处理的分布式设计。元数据不能存储在一个中心位置，否则它很快就会成为一个瓶颈。一个简单的解决方案是，使用分布式关系数据库来处理元数据，但是这会增加系统的复杂度，使得系统更难维护，成本也更高了。TDengine 1.x 的设计就是将所有元数据存储在管理节点（mnode）上，所以它也有 high-cardinality 的问题。在 TDengine 2.x 中，我们做了一些改进，就是将标签值存储在每个虚拟节点（vnode）而不是中央管理节点上, 聚合查询速度有保证，但系统启动时间在时间线超过千万后不可忍受，没有完全解决这个业内的难题。",
                      highlight:'',
                      author:'',
                      "avatar":"", 
                      create_time:'',
                      "_image":"",
                      like:0,
                      liked:1}
                      
                    
                    ]
        }
      },
      created () {
        var that=this;
				axios.get("http://127.0.0.1:5000/articles/commend")
				.then(function(data){
          console.log(data)
				 that.articleList=data["data"]["info"]
				}).catch(function(error){
					console.log(error)
					})
      }
}
</script>
      
  