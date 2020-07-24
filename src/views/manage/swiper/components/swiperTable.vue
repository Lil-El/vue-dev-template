<template>
  <div>
    <el-table :data="tableData">
      <el-table-column label="url地址" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="预览" width="180">
        <template slot-scope="scope">
          <img
            width="100"
            data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595572196314&di=761d267113ed254c0bbc2e01dc5cb127&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd6a3789c8b9f271fb4a179dd42a9473f2b5ce49a7f32-JgDwcQ_fw658"
            :src="scope.row.url"
            alt="图片出错"
            @error="handleError"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogVisible = true">编辑</el-button>
          <el-popconfirm title="确定删除吗？" @click="handleDelete(scope.$index, scope.row)">
            <el-button size="mini" type="danger" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div>
        <el-form label-position="left" ref="form" :model="form" label-width="80px">
          <el-form-item label="图形url：">
            <el-input size="small" v-model="form.url"></el-input>
          </el-form-item>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="handleChange"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="handlerUpload" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        url: "",
        file: null,
      },
      dialogVisible: false,
      tableData: [],
      hasPreview: false,
    };
  },
  created() {
    this.getSwiperImgs();
  },
  watch: {
    fileList: function () {},
  },
  methods: {
    getSwiperImgs() {
      setTimeout(() => {
        this.tableData = [
          {
            url: "http://www.baidu.com",
          },
        ];
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleError({ target }) {
      target.src = target.getAttribute("data-src");
    },
    handlerUpload() {
      this.dialogVisible = false;
      this.tableData[0].url = this.hasPreview.url;
    },
    handleChange(file) {
      let selectBox = document.getElementsByClassName(
        "el-upload--picture-card"
      )[0];
      selectBox.style.display = "none";
      this.hasPreview = file;
    },
    handleRemove(file) {
      let selectBox = document.getElementsByClassName(
        "el-upload--picture-card"
      )[0];
      selectBox.style.display = "block";
      this.hasPreview = false;
    },
  },
};
</script>
<style lang="scss" >
.el-table__row {
  height: 107px;
}
.upload-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-upload__tip {
    align-self: flex-start;
  }
}
.el-dialog {
  min-width: 400px;
}
.el-upload--picture-card {
  // transform: translateY(-160px);
  transition: all 0.3s;
}
</style>