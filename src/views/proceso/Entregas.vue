<template>
	<div>
		<div class="bg-body-light">
			<div class="content content-full">
				<div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left">
					<div class="flex-sm-fill">
						<h1 class="h3 font-w700 mb-2">
							Entregas
						</h1>
					</div>
					<div class="mt-3 mt-sm-0 ml-sm-3">
						<b-button variant="alt-primary" class="mr-1" href="javascript:void(0)" v-click-ripple  v-b-modal.modal-block-popin>
							<i class="fa fa-plus-square mr-1"></i> Nueva entrega
						</b-button>
					</div>
				</div>
			</div>
		</div>

		<div class="content">

			<b-modal id="modal-block-popin" size="lg" body-class="p-0" hide-footer hide-header>
				<div class="block block-rounded block-themed block-transparent mb-0">
					<div class="block-header bg-primary-dark">
						<h3 class="block-title">Registrar entrega</h3>
						<div class="block-options">
						<button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-popin')">
							<i class="fa fa-fw fa-times"></i>
						</button>
						</div>
					</div>
					<b-form @submit.stop.prevent="onSubmit">
						<div class="block-content font-size-sm">

							<b-row>
								<b-col lg="6">
                  <b-form-group label-for="lote_mp">
                    <template #label>
                      Nro de lote de MP <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="lote_mp" name="lote_mp" placeholder="" v-model="$v.form.lote_mp.$model" :state="$v.form.lote_mp.$dirty ? !$v.form.lote_mp.$error : null" aria-describedby="lote_mp-feedback"></b-form-input>
                    <b-form-invalid-feedback id="lote_mp-feedback">
                      Ingrese lote
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Select" label-for="producto">
                    <template #label>
                      Producto <span class="text-danger">*</span>
                    </template>
                    <b-form-select id="productoId" name="productoId" :options="productos" v-model="$v.form.productoId.$model" :state="$v.form.productoId.$dirty ? !$v.form.productoId.$error : null" aria-describedby="productoId-feedback"></b-form-select>
                    <b-form-invalid-feedback id="producto-feedback">
                      Seleccione un producto
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
							</b-row>

              <b-row>
                <b-col lg="4">
                  <b-form-group label-for="peso_mp">
                    <template #label>
                      Peso <span class="text-danger">*</span>
                    </template>
                    <b-form-input id="peso_mp" name="peso_mp" placeholder="" v-model="$v.form.peso_mp.$model" :state="$v.form.peso_mp.$dirty ? !$v.form.peso_mp.$error : null" aria-describedby="peso_mp-feedback"></b-form-input>
                    <b-form-invalid-feedback id="peso_mp-feedback">
                      Ingrese peso
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="2">
                  <b-form-group label="Select" label-for="unidad_mp">
                    <template #label>
                      UN.
                    </template>
                    <b-form-select id="unidad_mp" name="unidad_mp" :options="unidades" v-model="$v.form.unidad_mp.$model" :state="$v.form.unidad_mp.$dirty ? !$v.form.unidad_mp.$error : null" aria-describedby="unidad_mp-feedback"></b-form-select>
                    <b-form-invalid-feedback id="unidad_mp-feedback">
                      Seleccione una unidad
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Fecha" label-for="example-flatpickr-default">
                    <flat-pickr id="fecha" name="fecha" class="form-control bg-white" placeholder="Y-m-d" v-model="$v.form.fecha.$model" :state="$v.form.fecha.$dirty ? !$v.form.fecha.$error : null"></flat-pickr>
                    <b-form-invalid-feedback id="fecha-feedback">
                      Seleccione una fecha
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>

						</div>
						<div class="block-content block-content-full text-right border-top">
							<b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-popin')">Cancelar</b-button>
              <b-button variant="alt-primary" class="mr-1" @click="resetForm()">Limpiar</b-button>
							<b-button variant="primary" type="submit">Registrar</b-button>
            </div>
					</b-form>
				</div>
			</b-modal>

			<base-block rounded title="Listado de entregas">
				<template #options>
          <button type="button" class="btn btn-outline-primary btn-sm">
            <download-csv
              :data   = "items"
              name    = "listado_entregas.csv">
              Exportar a CSV
            </download-csv>
          </button>
				</template>
        <b-table responsive bordered striped hover table-class="table-vcenter" :items="items"></b-table>
			</base-block>

		</div>

	</div>
</template>

<style lang="scss">
  // Flatpickr + Custom overrides
  @import '~flatpickr/dist/flatpickr.css';
  @import './src/assets/scss/vendor/flatpickr';
</style>

<script>
  import axios from 'axios';
	import { validationMixin } from 'vuelidate'
	import { required, decimal, integer } from 'vuelidate/lib/validators'
  import flatPickr from 'vue-flatpickr-component'
  import JsonCSV from 'vue-json-csv'

	export default {
		mixins: [validationMixin],
    components: {
      flatPickr,
      'downloadCsv': JsonCSV,
    },
		data () {
			return {
        items: [],
        productos: [{ value: null, text: 'Seleccione' }],
        unidades: [
          { value: null, text: 'Seleccione' },
          { value: 'KG', text: 'KG' },
          { value: 'mg', text: 'mg' },
          { value: 'TN', text: 'TN' },
        ],
				form: {
          lote_mp: null,
          productoId: null,
          peso_mp: null,
          unidad_mp: null,
          fecha: new Date()
				}
			}
		},
		validations: {
			form: {
        lote_mp: {
					required,
					integer
				},
        productoId: {
          required
        },
        peso_mp: {
					required,
					decimal
				},
        unidad_mp: {
          required
        },
        fecha: {
          required
        }
			}
		},
		methods: {
      datetimeSimple(datetime, option) {
        let date_ob = new Date(datetime);
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        if(option == 'date') return year + "-" + month + "-" + date;
        if(option == 'time') return hours + ":" + minutes;
      },
      zeroPad(num, places) {
        let zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
      },
      toast (title, content, variant = null, append = false, toaster = 'b-toaster-top-right', autoHideDelay = 5000) {
        this.$bvToast.toast(content, {
          title: title,
          toaster: toaster,
          variant: variant,
          autoHideDelay: autoHideDelay,
          appendToast: append
        })
      },
      fetchItems() {
        let uri = 'http://localhost:3000/api/entregas';
        axios.get(uri).then((response) => {
          this.items =  [];
          response.data.forEach(item =>{
            this.items.push({
              fecha: item.fecha,
              turno: item.turno,
              fecha_registro: this.datetimeSimple(item.createdAt,'date'),
              hora_registro: this.datetimeSimple(item.createdAt,'time'),
              nro_orden_fabr: this.zeroPad(item.id,10),
              lote_mp: item.lote_mp,
              codigo: item.producto.codigo,
              producto: item.producto.descripcion,
              und_med: item.unidad_mp,
              peso: item.peso_mp,
            });
           });
          //this.items = response.data;
        });
      },
      fetchProductos() {
        let uri = 'http://localhost:3000/api/productos';
        axios.get(uri).then(response => {
          response.data.forEach(item =>{
            this.productos.push({ value: item.id, text: item.codigo + ' - ' + item.descripcion });
          });
        })
      },
      resetForm() {
        this.form = {
          lote_mp: null,
          productoId: null,
          peso_mp: null,
          unidad_mp: null,
          fecha: new Date()
        };

        this.$nextTick(() => {
          this.$v.$reset();
        });
      },
			onSubmit () {
				this.$v.form.$touch();

				if (this.$v.form.$anyError) {
					return
				}
        axios.post('http://localhost:3000/api/entregas', this.form)
          .then((response) => {
            if (response.status == 200) {
              this.fetchItems();
              this.toast('Información', 'Registro correcto', 'success');
              this.$bvModal.hide('modal-block-popin');
              this.resetForm();
            }
          })
          .catch((error) => {
            this.toast('Error', 'Ocurrió un problema al registrar', 'danger');
            console.log(error);
          }).finally(() => {
        });

			}
		},
    mounted(){
      this.fetchItems();
      this.fetchProductos();
    },
	}
</script>
